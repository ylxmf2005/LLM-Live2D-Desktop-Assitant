/*
 * This file is based on work originally written by Bryce, available at
 * https://github.com/SchwabischesBauernbrot/unsuperior-ai-waifu/blob/main/models.json. 
 * It was shared under the MIT License in 2023. 
 * Modified by Yi-Ting Chiu.
 */

// This is a dictionary of models that can be loaded into the Live2D viewer.
// For one to add new models, they must add a new object to the array below.

modelDict = [
    {
        "name": "shizuku",
        "description": "Orange-Haired Girl",
        "url": "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json",
        "kScale": 0.000625,
        "kXOffset": 1150,
        "idleMotionGroupName": "Idle",
        "emotionMap": {
            "neutral": 0,
            "anger": 2,
            "disgust": 2,
            "fear": 1,
            "joy": 3,
            "sadness": 1,
            "surprise": 3
        }
    },
    {
        "name": "other_unit_90001",
        "description": "Knight Mommy",
        "url": "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/VenusScramble/otherunits/other_unit_90001/live2d/model.json",
        "kScale": 0.0011,
        "kXOffset": 1500,
        "kYOffset": -150,
        "idleMotionGroupName": "idle",
        "emotionMap": {
            "neutral": 0,
            "anger": 2,
            "disgust": 2,
            "fear": 3,
            "joy": 5,
            "sadness": 3,
            "surprise": 4
        }
    },
    {
        "name": "player_unit_00003",
        "description": "Angel",
        "url": "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/VenusScramble/playerunits/player_unit_00003/live2d/model.json",
        "kScale": 0.0011,
        "kXOffset": 1500,
        "kYOffset": -150,
        "idleMotionGroupName": "idle",
        "emotionMap": {
            "neutral": 0,
            "anger": 2,
            "disgust": 2,
            "fear": 3,
            "joy": 5,
            "sadness": 3,
            "surprise": 4,
            "admiration": 4,
            "amusement": 4,
            "relief": 3,
            "remorse": 3,
            "caring": 5,
            "confusion": 3,
            "curiosity": 4,
            "pride": 5,
            "realization": 4,
            "optimism": 1,
            "excitement": 1
        }
    },
    {
        "name": "mashiro",
        "description": "Mashiro Shiina",
        "url": "https://cdn.jsdelivr.net/gh/artulloss/live2d/Sakurasou/mashiro/ryoufuku.model.json",
        "kScale": 0.0007,
        "kXOffset": 1000,
        "kYOffset": -200,
        "idleMotionGroupName": "idle",
        "emotionMap": {
            "neutral": 0,
            "anger": 2,
            "disgust": 7,   
            "fear": 3,
            "joy": 5,
            "sadness": 3,
            "surprise": 4,
            "admiration": 6,
            "amusement": 4,
            "relief": 4,
            "remorse": 3,
            "caring": 5,
            "confusion": 3,
            "curiosity": 4,
            "pride": 5,
            "realization": 4,
            "optimism": 1,
            "excitement": 6
        }
    },
    {
        "name": "Elaina",
        "description": "Elaina",
        "url": "/live2d-models/LSS/LSS.model3.json",
        "kScale": 0.000625,
        "kXOffset": 1000,
        "kYOffset": -200,
        "idleMotionGroupName": "idle",
        "emotionMap": {
            "neutral": 0,
            "coldness" : 1, 
            "disgust" : 1,
            "sad": 2,
            "worry": 2,
            "confusion": 3,
            "anger": 4,
            "surprise": 5,
            "expectation": 5,
            "joy": 6,
            "excitement" : 7,
            "pride": 8,
            "shy" : 9,
            "stunned" : 10,
            "embarrassed" : 11,
            "play_cool" : 12,
            "drink_tea" : 13
        }
    }
]