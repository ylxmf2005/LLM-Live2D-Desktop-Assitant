var app, model2;
var modelInfo, emoMap;

window.live2dModule = (function () {
    const live2d = PIXI.live2d;

    async function init() {
        app = new PIXI.Application({
            view: document.getElementById("canvas"),
            autoStart: true,
            resizeTo: window,
            // transparent: true,
            backgroundAlpha: 0,
        });

        // await loadModel();
    }

    async function loadModel(modelInfo = {}) {
        emoMap = modelInfo["emotionMap"];

        if (model2) {
            app.stage.removeChild(model2);
            model2.destroy({ children: true, texture: true, baseTexture: true });
            model2 = null;
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

        if (!modelInfo.initialXshift) modelInfo.initialXshift = 0;
        if (!modelInfo.initialYshift) modelInfo.initialYshift = 0;

        model2.x = app.view.width / 2 - model2.width / 2 + modelInfo["initialXshift"];
        model2.y = app.view.height / 2 - model2.height / 2 + modelInfo["initialYshift"];

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
        model.on("pointerover", () => {
            window.electronAPI.setIgnoreMouseEvents(false);
        });

        model.on("pointerout", () => {
            window.electronAPI.setIgnoreMouseEvents(true);
        });

        window.addEventListener('mousedown', (e) => {
            if (e.button === 2) { 
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

// window.live2dModule.init().then(() => {
//   window.live2dModule.loadModel(null).catch(error => {
//       console.error("Failed to load Live2D model:", error);
//   });
// });

function setExpression(expressionIndex) {
  expressionIndex = parseInt(expressionIndex);
  if (window.model2 && window.model2.internalModel.motionManager.expressionManager) {
      window.model2.internalModel.motionManager.expressionManager.setExpression(expressionIndex);
      console.info(`>> [x] -> Expression set to: (${expressionIndex})`);
  }
}

function setMouth(mouthY) {
  if (window.model2 && window.model2.internalModel.coreModel) {
      if (typeof window.model2.internalModel.coreModel.setParameterValueById === 'function') {
          window.model2.internalModel.coreModel.setParameterValueById('ParamMouthOpenY', mouthY);
      } else {
          window.model2.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthY);
      }
  }
}

window.setExpression = setExpression;
window.setMouth = setMouth;
