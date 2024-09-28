var app, model2;
var modelInfo, emoMap;

const live2dModule = (function () {
  const live2d = PIXI.live2d;

  async function init() {
    app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,
      resizeTo: window,
      transparent: true,
      backgroundAlpha: 0,
    });
  }

  async function loadModel(modelInfo) {
    if (modelInfo == null)
      modelInfo = {};
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
    modelInfo["kScale"] = 0.000625;

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

      draggable(model);
    });

    model2 = models[0];
    model2.x = app.view.width / 2 - model2.width / 2;
    model2.internalModel.eyeBlink = null;
  }

  function draggable(model) {
    model.interactive = true;
    model.buttonMode = true;

    model.on("pointerdown", (e) => {
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

  return {
    init,
    loadModel
  };
})();