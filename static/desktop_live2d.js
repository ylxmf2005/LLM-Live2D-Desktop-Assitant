
var app, model2;
var modelInfo, emoMap;

window.live2dModule = (function () {
  const live2d = PIXI.live2d;

  async function init() {
    app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,
      resizeTo: window,
      transparent: true,
      backgroundAlpha: 0,
    });

    await loadModel();
  }

  async function loadModel(modelInfo = {}) {
    modelInfo["emotionMap"] = {
      "neutral": 0,
      "disdainful": 1,
      "disgust": 1,
      "sad": 2,
      "worry": 2,
      "confusion": 3,
      "anger": 4,
      "surprise": 5,
      "expectation": 5,
      "joy": 6,
      "excitement": 7,
      "pride": 8,
      "shy": 9,
      "dumfounded": 10,
      "dizzy": 10,
      "embarrassed": 11,
      "nonchalant": 11,
      "play_cool": 12,
      "drink_tea": 13
    };
    modelInfo["url"] = "live2d-models/LSS/LSS.model3.json";
    modelInfo["kScale"] = 0.0003;

    emoMap = modelInfo["emotionMap"];

    if (model2) {
      app.stage.removeChild(model2);
    }

    const options = {
      autoInteract: false,
      autoUpdate: true,
    };

    const models = await Promise.all([
      live2d.Live2DModel.from(modelInfo.url, options),
    ]);

    models.forEach((model) => {
      app.stage.addChild(model);

      const scaleX = (innerWidth * modelInfo.kScale);
      const scaleY = (innerHeight * modelInfo.kScale);

      model.scale.set(Math.min(scaleX, scaleY));
      model.y = innerHeight * 0.01;

      makeDraggable(model);
      setupMouseEvents(model);

    });

    model2 = models[0];
    model2.x = app.view.width / 2 - model2.width / 2;
    model2.internalModel.eyeBlink = null;
  }

  function makeDraggable(model) {
    model.interactive = true;
    model.buttonMode = true;

    model.on("pointerdown", (e) => {
      if (e.data.button !== 0) return;
      model.dragging = true;
      model._pointerX = e.data.global.x - model.x;
      model._pointerY = e.data.global.y - model.y;
    });

    model.on("pointermove", (e) => {
      if (model.dragging) {
        model.position.x = e.data.global.x - model._pointerX;
        model.position.y = e.data.global.y - model._pointerY;
      }
    });

    model.on("pointerupoutside", () => (model.dragging = false));
    model.on("pointerup", () => (model.dragging = false));
  }

  function setupMouseEvents(model) {
    // 当鼠标进入模型区域时，允许窗口捕获鼠标事件
    model.on("pointerover", () => {
      window.electronAPI.setIgnoreMouseEvents(false);
    });

    // 当鼠标离开模型区域时，忽略窗口鼠标事件（允许事件穿透）
    model.on("pointerout", () => {
      window.electronAPI.setIgnoreMouseEvents(true);
    });

    window.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // 右键
        const x = e.screenX;
        const y = e.screenY;
        window.electronAPI.showContextMenu(x, y);
      }
    });

  }

  return {
    init,
    loadModel
  };
})();