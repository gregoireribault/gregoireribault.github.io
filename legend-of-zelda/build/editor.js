/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/js/constant.js":
/*!********************************!*\
  !*** ../assets/js/constant.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARROW_SILVER: () => (/* binding */ ARROW_SILVER),
/* harmony export */   ARROW_WOODEN: () => (/* binding */ ARROW_WOODEN),
/* harmony export */   BOOK_OF_MAGIC: () => (/* binding */ BOOK_OF_MAGIC),
/* harmony export */   DIRECTION_EAST: () => (/* binding */ DIRECTION_EAST),
/* harmony export */   DIRECTION_NORTH: () => (/* binding */ DIRECTION_NORTH),
/* harmony export */   DIRECTION_SOUTH: () => (/* binding */ DIRECTION_SOUTH),
/* harmony export */   DIRECTION_WEST: () => (/* binding */ DIRECTION_WEST),
/* harmony export */   DUNGEON_MAPS_PER_COLUMN: () => (/* binding */ DUNGEON_MAPS_PER_COLUMN),
/* harmony export */   DUNGEON_MAPS_PER_LINE: () => (/* binding */ DUNGEON_MAPS_PER_LINE),
/* harmony export */   EDITOR_KEYS_CANCEL: () => (/* binding */ EDITOR_KEYS_CANCEL),
/* harmony export */   EDITOR_KEYS_REDO: () => (/* binding */ EDITOR_KEYS_REDO),
/* harmony export */   EDITOR_KEYS_UNDO: () => (/* binding */ EDITOR_KEYS_UNDO),
/* harmony export */   FILE_TYPE_JSON: () => (/* binding */ FILE_TYPE_JSON),
/* harmony export */   FILE_TYPE_LOZ: () => (/* binding */ FILE_TYPE_LOZ),
/* harmony export */   FILE_TYPE_MP3: () => (/* binding */ FILE_TYPE_MP3),
/* harmony export */   FILE_TYPE_PNG: () => (/* binding */ FILE_TYPE_PNG),
/* harmony export */   FILE_TYPE_WEBP: () => (/* binding */ FILE_TYPE_WEBP),
/* harmony export */   GAME_INTERVAL_DRAWING: () => (/* binding */ GAME_INTERVAL_DRAWING),
/* harmony export */   GAME_INTERVAL_INPUT: () => (/* binding */ GAME_INTERVAL_INPUT),
/* harmony export */   GAME_INTERVAL_PROCESS: () => (/* binding */ GAME_INTERVAL_PROCESS),
/* harmony export */   GAME_TOP_MENU_HEIGHT: () => (/* binding */ GAME_TOP_MENU_HEIGHT),
/* harmony export */   INVENTORY_MAX_BOMBS_1: () => (/* binding */ INVENTORY_MAX_BOMBS_1),
/* harmony export */   INVENTORY_MAX_BOMBS_2: () => (/* binding */ INVENTORY_MAX_BOMBS_2),
/* harmony export */   INVENTORY_MAX_KEYS: () => (/* binding */ INVENTORY_MAX_KEYS),
/* harmony export */   INVENTORY_MAX_RUPEES: () => (/* binding */ INVENTORY_MAX_RUPEES),
/* harmony export */   ITEM_LADDER: () => (/* binding */ ITEM_LADDER),
/* harmony export */   ITEM_MAGICAL_KEY: () => (/* binding */ ITEM_MAGICAL_KEY),
/* harmony export */   ITEM_POWER_BRACELET_NONE: () => (/* binding */ ITEM_POWER_BRACELET_NONE),
/* harmony export */   ITEM_POWER_BRACELET_NORMAL: () => (/* binding */ ITEM_POWER_BRACELET_NORMAL),
/* harmony export */   ITEM_RING_BLUE: () => (/* binding */ ITEM_RING_BLUE),
/* harmony export */   ITEM_RING_GREEN: () => (/* binding */ ITEM_RING_GREEN),
/* harmony export */   ITEM_RING_RED: () => (/* binding */ ITEM_RING_RED),
/* harmony export */   ITEM_SHIELD_MAGICAL: () => (/* binding */ ITEM_SHIELD_MAGICAL),
/* harmony export */   ITEM_SHIELD_NORMAL: () => (/* binding */ ITEM_SHIELD_NORMAL),
/* harmony export */   LINK_ACTION_MOVE: () => (/* binding */ LINK_ACTION_MOVE),
/* harmony export */   LINK_ACTION_PICK: () => (/* binding */ LINK_ACTION_PICK),
/* harmony export */   LINK_ACTION_USE: () => (/* binding */ LINK_ACTION_USE),
/* harmony export */   LINK_ACTION_USE_ITEM_A: () => (/* binding */ LINK_ACTION_USE_ITEM_A),
/* harmony export */   LINK_ACTION_USE_ITEM_B: () => (/* binding */ LINK_ACTION_USE_ITEM_B),
/* harmony export */   LINK_DIRECTION_EAST: () => (/* binding */ LINK_DIRECTION_EAST),
/* harmony export */   LINK_DIRECTION_NORTH: () => (/* binding */ LINK_DIRECTION_NORTH),
/* harmony export */   LINK_DIRECTION_SOUTH: () => (/* binding */ LINK_DIRECTION_SOUTH),
/* harmony export */   LINK_DIRECTION_WEST: () => (/* binding */ LINK_DIRECTION_WEST),
/* harmony export */   MAP_TYPE_CAVERNS: () => (/* binding */ MAP_TYPE_CAVERNS),
/* harmony export */   MAP_TYPE_LEVEL1: () => (/* binding */ MAP_TYPE_LEVEL1),
/* harmony export */   MAP_TYPE_WORLD: () => (/* binding */ MAP_TYPE_WORLD),
/* harmony export */   PATH_AUDIO_SOUNDS: () => (/* binding */ PATH_AUDIO_SOUNDS),
/* harmony export */   PATH_DATA_EMPTY_WORLD: () => (/* binding */ PATH_DATA_EMPTY_WORLD),
/* harmony export */   PATH_DATA_GAME: () => (/* binding */ PATH_DATA_GAME),
/* harmony export */   PATH_DATA_SOUNDS: () => (/* binding */ PATH_DATA_SOUNDS),
/* harmony export */   PATH_DATA_SPRITES: () => (/* binding */ PATH_DATA_SPRITES),
/* harmony export */   PATH_SPRITES_IMAGE: () => (/* binding */ PATH_SPRITES_IMAGE),
/* harmony export */   SOUND_ARROW: () => (/* binding */ SOUND_ARROW),
/* harmony export */   SOUND_BOMB_BLOW: () => (/* binding */ SOUND_BOMB_BLOW),
/* harmony export */   SOUND_BOMB_DROP: () => (/* binding */ SOUND_BOMB_DROP),
/* harmony export */   SOUND_BOOMERANG: () => (/* binding */ SOUND_BOOMERANG),
/* harmony export */   SOUND_BOSS_HIT: () => (/* binding */ SOUND_BOSS_HIT),
/* harmony export */   SOUND_BOSS_SCREAM_1: () => (/* binding */ SOUND_BOSS_SCREAM_1),
/* harmony export */   SOUND_BOSS_SCREAM_2: () => (/* binding */ SOUND_BOSS_SCREAM_2),
/* harmony export */   SOUND_BOSS_SCREAM_3: () => (/* binding */ SOUND_BOSS_SCREAM_3),
/* harmony export */   SOUND_CANDLE: () => (/* binding */ SOUND_CANDLE),
/* harmony export */   SOUND_DOOR_UNLOCK: () => (/* binding */ SOUND_DOOR_UNLOCK),
/* harmony export */   SOUND_ENNEMY_DIE: () => (/* binding */ SOUND_ENNEMY_DIE),
/* harmony export */   SOUND_ENNEMY_HIT: () => (/* binding */ SOUND_ENNEMY_HIT),
/* harmony export */   SOUND_FANFARE: () => (/* binding */ SOUND_FANFARE),
/* harmony export */   SOUND_GET_HEART: () => (/* binding */ SOUND_GET_HEART),
/* harmony export */   SOUND_GET_ITEM: () => (/* binding */ SOUND_GET_ITEM),
/* harmony export */   SOUND_GET_RUPEE: () => (/* binding */ SOUND_GET_RUPEE),
/* harmony export */   SOUND_KEY_APPEAR: () => (/* binding */ SOUND_KEY_APPEAR),
/* harmony export */   SOUND_LINK_DIE: () => (/* binding */ SOUND_LINK_DIE),
/* harmony export */   SOUND_LINK_HURT: () => (/* binding */ SOUND_LINK_HURT),
/* harmony export */   SOUND_LOW_HEALTH: () => (/* binding */ SOUND_LOW_HEALTH),
/* harmony export */   SOUND_MAGICAL_ROD: () => (/* binding */ SOUND_MAGICAL_ROD),
/* harmony export */   SOUND_OVERWORLD: () => (/* binding */ SOUND_OVERWORLD),
/* harmony export */   SOUND_RECORDER: () => (/* binding */ SOUND_RECORDER),
/* harmony export */   SOUND_REFILL_LOOP: () => (/* binding */ SOUND_REFILL_LOOP),
/* harmony export */   SOUND_SECRET: () => (/* binding */ SOUND_SECRET),
/* harmony export */   SOUND_SHIELD: () => (/* binding */ SOUND_SHIELD),
/* harmony export */   SOUND_STAIRS: () => (/* binding */ SOUND_STAIRS),
/* harmony export */   SOUND_SWORD_COMBINED: () => (/* binding */ SOUND_SWORD_COMBINED),
/* harmony export */   SOUND_SWORD_SHOOT: () => (/* binding */ SOUND_SWORD_SHOOT),
/* harmony export */   SOUND_SWORD_SLASH: () => (/* binding */ SOUND_SWORD_SLASH),
/* harmony export */   SOUND_TEXT: () => (/* binding */ SOUND_TEXT),
/* harmony export */   SOUND_TEXT_LOOP: () => (/* binding */ SOUND_TEXT_LOOP),
/* harmony export */   SOUND_TEXT_SLOW: () => (/* binding */ SOUND_TEXT_SLOW),
/* harmony export */   SPRITE_HEIGHT: () => (/* binding */ SPRITE_HEIGHT),
/* harmony export */   SPRITE_LINK_PREFIX: () => (/* binding */ SPRITE_LINK_PREFIX),
/* harmony export */   SPRITE_TEXT_COLOR_RED: () => (/* binding */ SPRITE_TEXT_COLOR_RED),
/* harmony export */   SPRITE_TEXT_COLOR_WHITE: () => (/* binding */ SPRITE_TEXT_COLOR_WHITE),
/* harmony export */   SPRITE_TEXT_HEIGHT: () => (/* binding */ SPRITE_TEXT_HEIGHT),
/* harmony export */   SPRITE_TEXT_PREFIX: () => (/* binding */ SPRITE_TEXT_PREFIX),
/* harmony export */   SPRITE_TEXT_WIDTH: () => (/* binding */ SPRITE_TEXT_WIDTH),
/* harmony export */   SPRITE_WIDTH: () => (/* binding */ SPRITE_WIDTH),
/* harmony export */   TILES_PATH: () => (/* binding */ TILES_PATH),
/* harmony export */   TILES_PER_COLUMN: () => (/* binding */ TILES_PER_COLUMN),
/* harmony export */   TILES_PER_LINE: () => (/* binding */ TILES_PER_LINE),
/* harmony export */   TILE_HEIGHT: () => (/* binding */ TILE_HEIGHT),
/* harmony export */   TILE_WIDTH: () => (/* binding */ TILE_WIDTH),
/* harmony export */   TRANSITION_CAVE_ENTRANCE: () => (/* binding */ TRANSITION_CAVE_ENTRANCE),
/* harmony export */   TRANSITION_CAVE_EXIT: () => (/* binding */ TRANSITION_CAVE_EXIT),
/* harmony export */   TRANSITION_CAVE_STAIRS_DOWN: () => (/* binding */ TRANSITION_CAVE_STAIRS_DOWN),
/* harmony export */   TRANSITION_CAVE_STAIRS_UP: () => (/* binding */ TRANSITION_CAVE_STAIRS_UP),
/* harmony export */   TRANSITION_MAP_DRAG: () => (/* binding */ TRANSITION_MAP_DRAG),
/* harmony export */   TRANSITION_MAP_EAST: () => (/* binding */ TRANSITION_MAP_EAST),
/* harmony export */   TRANSITION_MAP_INCREMENT_DELTA: () => (/* binding */ TRANSITION_MAP_INCREMENT_DELTA),
/* harmony export */   TRANSITION_MAP_INTERVAL_PLAY: () => (/* binding */ TRANSITION_MAP_INTERVAL_PLAY),
/* harmony export */   TRANSITION_MAP_NORTH: () => (/* binding */ TRANSITION_MAP_NORTH),
/* harmony export */   TRANSITION_MAP_SOUTH: () => (/* binding */ TRANSITION_MAP_SOUTH),
/* harmony export */   TRANSITION_MAP_WEST: () => (/* binding */ TRANSITION_MAP_WEST),
/* harmony export */   WORLD_MAPS_PER_COLUMN: () => (/* binding */ WORLD_MAPS_PER_COLUMN),
/* harmony export */   WORLD_MAPS_PER_LINE: () => (/* binding */ WORLD_MAPS_PER_LINE)
/* harmony export */ });


const PATH_DATA_SPRITES = 'data/sprites.loz'
const PATH_DATA_SOUNDS = 'data/sounds.loz'
const PATH_AUDIO_SOUNDS = 'audio/sounds.mp3'
const PATH_SPRITES_IMAGE = 'images/sprites.png'
const PATH_DATA_GAME = 'data/game.loz'
const PATH_DATA_EMPTY_WORLD = 'data/world.empty.loz'
const TILES_PATH = 'data/tiles.loz'
const TILE_WIDTH = 32
const TILE_HEIGHT = 32
const TILES_PER_LINE = 16
const TILES_PER_COLUMN = 11
const WORLD_MAPS_PER_LINE = 16
const WORLD_MAPS_PER_COLUMN = 8
const DUNGEON_MAPS_PER_LINE = 8
const DUNGEON_MAPS_PER_COLUMN = 8
const EDITOR_KEYS_REDO = ['ControlLeft', 'ShiftLeft', 'KeyW']
const EDITOR_KEYS_UNDO = ['ControlLeft', 'KeyW']
const EDITOR_KEYS_CANCEL = ['Escape']
const FILE_TYPE_JSON = 'json'
const FILE_TYPE_LOZ = 'loz'
const FILE_TYPE_MP3 = 'mp3'
const FILE_TYPE_PNG = 'png'
const FILE_TYPE_WEBP = 'webp'
const GAME_INTERVAL_DRAWING = 50
const GAME_INTERVAL_PROCESS = 50
const GAME_INTERVAL_INPUT = 30
const GAME_TOP_MENU_HEIGHT = 96
const MAP_TYPE_WORLD = 'world'
const MAP_TYPE_CAVERNS = 'caverns'
const MAP_TYPE_LEVEL1 = 'level1'
const SPRITE_WIDTH = 32
const SPRITE_HEIGHT = 32
const SOUND_ARROW = 'arrow'
const SOUND_BOMB_BLOW = 'bomb_blow'
const SOUND_BOMB_DROP = 'bomb_drop'
const SOUND_BOOMERANG = 'boomerang'
const SOUND_BOSS_HIT = 'boss_hit'
const SOUND_BOSS_SCREAM_1 = 'boss_scream_1'
const SOUND_BOSS_SCREAM_2 = 'boss_scream_2'
const SOUND_BOSS_SCREAM_3 = 'boss_scream_3'
const SOUND_CANDLE = 'candle'
const SOUND_DOOR_UNLOCK = 'door_unlock'
const SOUND_ENNEMY_DIE = 'ennemy_die'
const SOUND_ENNEMY_HIT = 'ennemy_hit'
const SOUND_FANFARE = 'fanfare'
const SOUND_GET_HEART = 'get_heart'
const SOUND_GET_ITEM = 'get_item'
const SOUND_GET_RUPEE = 'get_rupee'
const SOUND_KEY_APPEAR = 'key_appear'
const SOUND_LINK_DIE = 'link_die'
const SOUND_LINK_HURT = 'link_hurt'
const SOUND_LOW_HEALTH = 'low_health'
const SOUND_MAGICAL_ROD = 'magical_rod'
const SOUND_OVERWORLD = 'overworld'
const SOUND_RECORDER = 'recorder'
const SOUND_REFILL_LOOP = 'refill_loop'
const SOUND_SECRET = 'secret'
const SOUND_SHIELD = 'shield'
const SOUND_STAIRS = 'stairs'
const SOUND_SWORD_COMBINED = 'sword_combined'
const SOUND_SWORD_SHOOT = 'sword_shoot'
const SOUND_SWORD_SLASH = 'sword_slash'
const SOUND_TEXT = 'text'
const SOUND_TEXT_LOOP = 'text_loop'
const SOUND_TEXT_SLOW = 'text_slow'
const SPRITE_LINK_PREFIX = 'link'
const SPRITE_TEXT_PREFIX = 'text'
const SPRITE_TEXT_COLOR_RED = 'red'
const SPRITE_TEXT_COLOR_WHITE = 'white'
const SPRITE_TEXT_WIDTH = 16
const SPRITE_TEXT_HEIGHT = 16
const ITEM_LADDER = 'ladder'
const ITEM_MAGICAL_KEY = 'magical_key'
const ITEM_POWER_BRACELET_NONE = 'power_bracelet_none'
const ITEM_POWER_BRACELET_NORMAL = 'power_bracelet_normal'
const ITEM_SHIELD_MAGICAL = 'magical'
const ITEM_SHIELD_NORMAL = 'normal'
const ITEM_RING_BLUE = 'blue'
const ITEM_RING_GREEN = 'green'
const ITEM_RING_RED = 'red'
const ARROW_SILVER = 'arrow_silver'
const ARROW_WOODEN = 'arrow_wooden'
const BOOK_OF_MAGIC = 'book_of_magic'
const INVENTORY_MAX_KEYS = 250
const INVENTORY_MAX_RUPEES = 250
const INVENTORY_MAX_BOMBS_1 = 8
const INVENTORY_MAX_BOMBS_2 = 16
const LINK_ACTION_MOVE = 'move'
const LINK_ACTION_PICK = 'pick'
const LINK_ACTION_USE = 'use'
const LINK_ACTION_USE_ITEM_A = 'user_item_a'
const LINK_ACTION_USE_ITEM_B = 'user_item_b'
const LINK_DIRECTION_EAST = 'east'
const LINK_DIRECTION_NORTH = 'north'
const LINK_DIRECTION_SOUTH = 'south'
const LINK_DIRECTION_WEST = 'west'
const TRANSITION_MAP_EAST = 'map_east'
const TRANSITION_MAP_NORTH = 'map_north'
const TRANSITION_MAP_SOUTH = 'map_south'
const TRANSITION_MAP_WEST = 'map_west'
const TRANSITION_CAVE_ENTRANCE = 'cave_entrance'
const TRANSITION_CAVE_EXIT = 'cave_exit'
const TRANSITION_CAVE_STAIRS_DOWN = 'cave_stairs_down'
const TRANSITION_CAVE_STAIRS_UP = 'cave_stairs_up'
const TRANSITION_MAP_DRAG = 'map_drag'
const TRANSITION_MAP_INCREMENT_DELTA = 8
const TRANSITION_MAP_INTERVAL_PLAY = 10
const DIRECTION_EAST = 'east'
const DIRECTION_NORTH = 'north'
const DIRECTION_SOUTH = 'south'
const DIRECTION_WEST = 'west'


/***/ }),

/***/ "../assets/js/editor/event.js":
/*!************************************!*\
  !*** ../assets/js/editor/event.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const listeners = []

class Listener {
  constructor (namespace, handler) {
    this.namespace = namespace
    this.handler = handler
  }

  addChannel (channel) {
    if (this.channels.indexOf(channel) === -1) {
      this.channels.push(channel)
    }
  }

  notify (args) {
    // if (this.isFunction(this.handler)) {
    this.handler.apply(this, args)
    // }
  }

  isFunction (callable) {
    return callable && {}.toString.call(callable) === '[object Function]' // Issue with async function
  }
}

const Event = {
  broadcast: function () {
    const args = Array.prototype.slice.call(arguments)
    const namespace = args.shift()
    listeners.forEach(function (listener) {
      if (listener.namespace === namespace) {
        listener.notify(args)
      }
    })
    return this
  },

  off: function (namespace, handler) {
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i].namespace === namespace && listeners[i].handler === handler) {
        listeners.splice(i, 1)
        break
      }
    }
    return this
  },

  on: function (namespace, handler) {
    const listener = new Listener(namespace, handler)
    listeners.push(listener)
    return this
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);


/***/ }),

/***/ "../assets/js/editor/history.js":
/*!**************************************!*\
  !*** ../assets/js/editor/history.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "../assets/js/editor/event.js");


;

const MODE_NONE = 'none'
const MODE_UNDO = 'undo'
const MODE_REDO = 'redo'
let history = []
let historyIndex = -1
let mode = MODE_NONE

const History = {
  start: function () {
    const self = this
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].on('editor:undo', () => {
      self.undo()
    })
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].on('editor:redo', () => {
      self.redo()
    })
  },

  reset: function () {
    history = []
  },

  push: function (context, undo, redo) {
    if (mode === MODE_NONE) {
      for (let i = historyIndex + 1; i < history.length; i++) {
        history.pop()
      }
      history.push({ context, undo, redo })
      historyIndex++
    }
  },

  unpush: function () {
  },

  undo: function () {
    const index = historyIndex
    if (index !== undefined && index >= 0) {
      historyIndex--
      mode = MODE_UNDO
      history[index].undo.call(history[index].context)
      mode = MODE_NONE
    }
  },

  redo: function () {
    const index = historyIndex + 1
    if (index !== undefined && index < history.length) {
      mode = MODE_REDO
      history[index].redo.call(history[index].context)
      mode = MODE_NONE
      historyIndex++
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);


/***/ }),

/***/ "../assets/js/editor/keys.js":
/*!***********************************!*\
  !*** ../assets/js/editor/keys.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "../assets/js/editor/event.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;


class Keys {
  triggers = []
  pressedKeys = []

  constructor () {
    this.triggers.push({ event: 'editor:redo', keys: _constant__WEBPACK_IMPORTED_MODULE_1__.EDITOR_KEYS_REDO })
    this.triggers.push({ event: 'editor:undo', keys: _constant__WEBPACK_IMPORTED_MODULE_1__.EDITOR_KEYS_UNDO })
    this.triggers.push({ event: 'editor:cancel', keys: _constant__WEBPACK_IMPORTED_MODULE_1__.EDITOR_KEYS_CANCEL })
    this.initKeyboardEvents()
  }

  initKeyboardEvents () {
    const self = this
    document.onkeydown = function (e) {
      const index = self.pressedKeys.indexOf(e.code)
      if (index === -1) {
        self.pressedKeys.push(e.code)
      }
      self.checkTriggers()
    }
    document.onkeyup = function (e) {
      const index = self.pressedKeys.indexOf(e.code)
      if (index !== -1) {
        self.pressedKeys.splice(index, 1)
      }
    }
  }

  checkTriggers () {
    for (let i = 0; i < this.triggers.length; i++) {
      const trigger = this.triggers[i]
      if (this.isAllKeysPressed(trigger.keys)) {
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast(trigger.event)
        return
      }
    }
  }

  isAllKeysPressed (codes) {
    let nbPressed = 0
    for (let i = 0; i < codes.length; i++) {
      if (this.isKeyPressed(codes[i])) {
        nbPressed++
      }
    }

    return nbPressed === codes.length
  }

  isKeyPressed (code) {
    return this.pressedKeys.indexOf(code) !== -1
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);


/***/ }),

/***/ "../assets/js/editor/panel/abstract-panel.js":
/*!***************************************************!*\
  !*** ../assets/js/editor/panel/abstract-panel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Interact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Interact */ "../node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var Interact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Interact__WEBPACK_IMPORTED_MODULE_0__);


;

class AbstractPanel {
  element
  container
  draggable
  minWidth
  minHeight
  maxWidth
  maxHeight

  constructor (element, container, minWidth, minHeight, maxWidth, maxHeight) {
    this.element = element
    this.container = container
    this.minWidth = minWidth ?? 0
    this.minHeight = minHeight ?? 0
    this.maxWidth = maxWidth ?? 1000
    this.maxHeight = maxHeight ?? 1000

    this.updateCanvasSize(element)

    Object.assign(element.dataset, { x: 0, y: 0 })

    const self = this
    Interact__WEBPACK_IMPORTED_MODULE_0___default()(element).resizable({
      edges: { top: false, left: true, bottom: true, right: true },
      modifiers: [
        /* interact.modifiers.restrict({
          restriction: container
        }) */
      ],
      listeners: {
        move: function (event) {
          self.resizePanel(element, event)
        }
      }
    })

    const draggable = element.querySelector('.draggable')
    if (draggable) {
      Interact__WEBPACK_IMPORTED_MODULE_0___default()(draggable).draggable({
        // inertia: true,
        modifiers: [
          /* interact.modifiers.restrict({
            restriction: container,
            //endOnly: true
          }) */
        ],
        listeners: {
          move (event) {
            self.dragPanel(element, event)
          }
        }
      })
    }
    this.draggable = draggable

    this.element.addEventListener('click', event => {
      // self.movePanelToFront()
    })
  }

  resizePanel (element, event) {
    let { x, y } = event.target.dataset
    x = (parseFloat(x) || 0) + event.deltaRect.left
    y = (parseFloat(y) || 0) + event.deltaRect.top
    let width = event.rect.width
    let height = event.rect.height
    width = width > this.maxWidth ? this.maxWidth : (width < this.minWidth ? this.minWidth : width)
    height = height > this.maxHeight ? this.maxHeight : (height < this.minHeight ? this.minHeight : height)

    Object.assign(event.target.style, {
      width: `${width}px`,
      height: `${height}px`,
      transform: `translate(${x}px, ${y}px)`
    })
    Object.assign(event.target.dataset, { x, y })

    this.updateCanvasSize(element)
    this.movePanelToFront()
  }

  dragPanel (element, event) {
    let { x, y } = element.dataset
    x = (parseFloat(x) || 0) + event.dx
    y = (parseFloat(y) || 0) + event.dy

    Object.assign(element.style, {
      transform: `translate(${x}px, ${y}px)`
    })
    Object.assign(element.dataset, { x, y })
    this.movePanelToFront()
  }

  updateCanvasSize (container) {
    const canvas = container.querySelector('canvas')
    if (!canvas) {
      return
    }
    const rect = container.getBoundingClientRect()
    canvas.width = rect.width - 2
    canvas.height = rect.height - 20 - 2
  }

  movePanelToFront () {
    this.element.parentNode.appendChild(this.element)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractPanel);


/***/ }),

/***/ "../assets/js/editor/panel/general-menu.js":
/*!*************************************************!*\
  !*** ../assets/js/editor/panel/general-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");


;

class GeneralMenu {
  constructor (
    importWorldJsonButton,
    importDefaultWorldLozButton,
    importWorldLozButton,
    exportWorldJsonButton,
    exportWorldLozButton,
    toggleBlockButton
  ) {
    importWorldJsonButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:import-world-json')
    })
    importDefaultWorldLozButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:import-default-world-loz')
    })
    importWorldLozButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:import-world-loz')
    })
    exportWorldJsonButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:export-world-json')
    })
    exportWorldLozButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:export-world-loz')
    })
    toggleBlockButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:general:toggle-block')
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralMenu);


/***/ }),

/***/ "../assets/js/editor/panel/map-panel.js":
/*!**********************************************!*\
  !*** ../assets/js/editor/panel/map-panel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPanel: () => (/* binding */ MapPanel)
/* harmony export */ });
/* harmony import */ var Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Panel/abstract-panel */ "../assets/js/editor/panel/abstract-panel.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "../assets/js/constant.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resource */ "../assets/js/resource.js");
/* harmony import */ var _model_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/extra */ "../assets/js/model/extra.js");
/* harmony import */ var _model_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/character */ "../assets/js/model/character.js");


;






const PREVIEW_WIDTH = 145
const PREVIEW_HEIGHT = 100

class MapPanel extends Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (element, container, minWidth, minHeight, maxWidth, maxHeight) {
    super(element, container, minWidth, minHeight, maxWidth, maxHeight)

    // Preview
    this.canvas = element.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.width = PREVIEW_WIDTH
    this.canvas.height = PREVIEW_HEIGHT

    // Character
    this.addCharacterButton = element.querySelector('button#add-character')
    this.characterList = element.querySelector('div#character-list')
    this.characterSectionTemplate = this.characterList.querySelector('.character-section')
    this.characterSectionTemplate.remove()
    this.addCharacterButtonListener = this.addCharacterButtonListener.bind(this)

    // Extras
    this.addExtraButton = element.querySelector('button#add-extra')
    this.extraList = element.querySelector('div#extra-list')
    this.extraSectionTemplate = this.extraList.querySelector('.extra-section')
    this.extraSectionTemplate.remove()
    this.addExtraButtonListener = this.addExtraButtonListener.bind(this)

    this.start()
    this.draw()
  }

  start () {
    const self = this

    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('world-panel:select-map', (map) => {
      self.canvas.closest('.panel-body').classList.remove('hidden')
      self.applyMap(map)
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('editor:cancel', () => {
      self.canvas.closest('.panel-body').classList.add('hidden')
      self.applyMap()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-world', () => {
      self.applyMap()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-caverns', () => {
      self.applyMap()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-level1', () => {
      self.applyMap()
      self.draw()
    })
  }

  reset () {
    this.element.querySelectorAll('.section').forEach((element) => {
      element.classList.add('hidden')
    })

    if (!this.map) {
      return
    }

    // Character
    this.addCharacterButton.removeEventListener('click', this.savedAddCharacterButtonListener)
    this.resetSections(this.characterList)

    // Extras
    this.addExtraButton.removeEventListener('click', this.savedAddExtraButtonListener)
    this.resetSections(this.extraList)
  }

  applyMap (map) {
    this.reset()
    this.map = map
    if (!map) {
      return
    }

    this.element.querySelectorAll('.section').forEach((element) => {
      element.classList.remove('hidden')
    })

    // Character
    this.addCharacterButton.addEventListener('click', this.savedAddCharacterButtonListener = this.addCharacterButtonListener)
    this.initCharacters()
    this.toggleAddCharacterButtonEnabled()

    // Extras
    this.addExtraButton.addEventListener('click', this.savedAddExtraButtonListener = this.addExtraButtonListener)
    this.initExtras()
    this.toggleAddExtraButtonEnabled()
  }

  toggleAddCharacterButtonEnabled () {
    const max = this.addCharacterButton.dataset.max ? parseInt(this.addCharacterButton.dataset.max) : undefined
    if (max && this.characterList.children.length >= max) {
      this.addCharacterButton.setAttribute('disabled', true)
    } else {
      this.addCharacterButton.removeAttribute('disabled')
    }
  }

  addCharacterButtonListener (e) {
    e.preventDefault()
    this.addCharacterSection()
    this.toggleAddCharacterButtonEnabled()
  }

  addCharacterSection () {
    const section = this.characterSectionTemplate.cloneNode(true)
    const self = this
    section.querySelector('button[name="character-remove"]').addEventListener('click', (e) => {
      e.preventDefault()
      section.remove()
      self.updateCharacters(self.characterList)
      self.toggleAddCharacterButtonEnabled()
    })
    section.querySelector('select[name="character-select"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateCharacters(self.characterList)
    })
    section.querySelector('input[name="character-column-input"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateCharacters(self.characterList)
    })
    section.querySelector('input[name="character-line-input"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateCharacters(self.characterList)
    })
    section.querySelector('input[name="character-text-input"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateCharacters(self.characterList)
    })
    this.characterList.appendChild(section)
    return section
  }

  initCharacters () {
    for (const character of this.map.characters) {
      const section = this.addCharacterSection()
      this.setSelectValue(section.querySelector('select[name="character-select"]'), character.sprite.name)
      section.querySelector('input[name="character-column-input"]').value = character.column
      section.querySelector('input[name="character-line-input"]').value = character.line
      section.querySelector('input[name="character-text-input"]').value = character.text ?? ''
    }
  }

  updateCharacters (container) {
    this.map.characters = []
    container.querySelectorAll('.character-section').forEach((section) => {
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_3__["default"].getSprite(this.getSelectValue(section.querySelector('select[name="character-select"]')))
      const column = section.querySelector('input[name="character-column-input"]').value ? parseFloat(section.querySelector('input[name="character-column-input"]').value) : undefined
      const line = section.querySelector('input[name="character-line-input"]').value ? parseFloat(section.querySelector('input[name="character-line-input"]').value) : undefined
      const text = section.querySelector('input[name="character-text-input"]').value ?? ''
      if (!!sprite && !!column && !!line) {
        const x = this.map.x + _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH * column
        const y = this.map.y + _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT * line
        const character = new _model_character__WEBPACK_IMPORTED_MODULE_5__.Character(column, line, x, y, _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT, sprite, text)
        this.map.characters.push(character)
      }
    })
    this.draw()
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].broadcast('map-panel:update')
  }

  toggleAddExtraButtonEnabled () {
    const max = this.addExtraButton.dataset.max ? parseInt(this.addExtraButton.dataset.max) : undefined
    if (max && this.extraList.childNodes.length >= max) {
      this.addExtraButton.setAttribute('disabled', true)
    } else {
      this.addExtraButton.removeAttribute('disabled')
    }
  }

  addExtraButtonListener (e) {
    e.preventDefault()
    this.addExtraSection()
    this.toggleAddExtraButtonEnabled()
  }

  addExtraSection () {
    const section = this.extraSectionTemplate.cloneNode(true)
    const self = this
    section.querySelector('button[name="extra-remove"]').addEventListener('click', (e) => {
      e.preventDefault()
      section.remove()
      self.updateExtras(self.extraList)
      self.toggleAddExtraButtonEnabled()
    })
    section.querySelector('select[name="extra-select"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateExtras(self.extraList)
    })
    section.querySelector('input[name="extra-column-input"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateExtras(self.extraList)
    })
    section.querySelector('input[name="extra-line-input"]').addEventListener('change', (e) => {
      e.preventDefault()
      self.updateExtras(self.extraList)
    })
    this.extraList.appendChild(section)
    return section
  }

  resetSections (container) {
    container.replaceChildren()
  }

  initExtras () {
    for (const extra of this.map.extras) {
      const section = this.addExtraSection()
      this.setSelectValue(section.querySelector('select[name="extra-select"]'), extra.sprite.name)
      section.querySelector('input[name="extra-column-input"]').value = extra.column
      section.querySelector('input[name="extra-line-input"]').value = extra.line
    }
  }

  updateExtras (container) {
    this.map.extras = []
    container.querySelectorAll('.extra-section').forEach((section) => {
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_3__["default"].getSprite(this.getSelectValue(section.querySelector('select[name="extra-select"]')))
      const column = section.querySelector('input[name="extra-column-input"]').value ? parseFloat(section.querySelector('input[name="extra-column-input"]').value) : undefined
      const line = section.querySelector('input[name="extra-line-input"]').value ? parseFloat(section.querySelector('input[name="extra-line-input"]').value) : undefined
      if (!!sprite && !!column && !!line) {
        const x = this.map.x + _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH * column
        const y = this.map.y + _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT * line
        const extra = new _model_extra__WEBPACK_IMPORTED_MODULE_4__.Extra(column, line, x, y, _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT, sprite)
        this.map.extras.push(extra)
      }
    })
    this.draw()
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].broadcast('map-panel:update')
  }

  draw () {
    this.context.fillStyle = this.color
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    if (this.map) {
      this.context.save()

      this.context.scale(PREVIEW_WIDTH / this.map.width, PREVIEW_HEIGHT / this.map.height)
      this.context.translate(-this.map.x, -this.map.y)
      this.map.draw(this.context)
      this.context.restore()
    }
  }

  resizePanel (element, event) {
    super.resizePanel(element, event)
    this.canvas.width = PREVIEW_WIDTH
    this.canvas.height = PREVIEW_HEIGHT
  }

  getSelectValue (select) {
    return select.options[select.selectedIndex].value
  }

  setSelectValue (select, value) {
    select.selectedIndex = undefined
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value == value) {
        select.selectedIndex = i
      }
    }
  }
}




/***/ }),

/***/ "../assets/js/editor/panel/map-selector-menu.js":
/*!******************************************************!*\
  !*** ../assets/js/editor/panel/map-selector-menu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");


;

class MapSelectorMenu {
  constructor (
    displayWorldButton,
    displayCavernsButton,
    displayLevel1Button,
    displayLevel2Button,
    displayLevel3Button,
    displayLevel4Button,
    displayLevel5Button,
    displayLevel6Button,
    displayLevel7Button,
    displayLevel8Button,
    displayLevel9Button
  ) {
    displayWorldButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-world')
    })
    displayCavernsButton.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-caverns')
    })
    displayLevel1Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level1')
    })
    displayLevel2Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level2')
    })
    displayLevel3Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level3')
    })
    displayLevel4Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level4')
    })
    displayLevel5Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level5')
    })
    displayLevel6Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level6')
    })
    displayLevel7Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level7')
    })
    displayLevel8Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level8')
    })
    displayLevel9Button.addEventListener('click', e => {
      e.preventDefault()
      _event__WEBPACK_IMPORTED_MODULE_0__["default"].broadcast('menu:map-selector:display-level9')
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapSelectorMenu);


/***/ }),

/***/ "../assets/js/editor/panel/tile-panel.js":
/*!***********************************************!*\
  !*** ../assets/js/editor/panel/tile-panel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TilePanel: () => (/* binding */ TilePanel)
/* harmony export */ });
/* harmony import */ var Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Panel/abstract-panel */ "../assets/js/editor/panel/abstract-panel.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "../assets/js/constant.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resource */ "../assets/js/resource.js");


;




class TilePanel extends Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  transitionTargetMapTypeSelect
  transitionTargetMapColumnSelect
  transitionTargetMapLineSelect
  transitionTargetX
  transitionTargetY
  transitionEndSelect

  color = 'black'
  drawBlock = false
  tile

  constructor (element, container, minWidth, minHeight, maxWidth, maxHeight) {
    super(element, container, minWidth, minHeight, maxWidth, maxHeight)

    // Block
    this.canvas = element.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.width = _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH
    this.canvas.height = _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT
    this.hitboxInputs = element.querySelectorAll('input[name^="tile-hitbox-"]')
    this.hitboxInputListener = this.hitboxInputListener.bind(this)

    // Destructible
    this.destructibleEnabledInput = element.querySelector('input[name="destructible-enabled"]')
    this.destructibleSelect = element.querySelector('select[name="destructible-select"]')
    this.destructibleEnabledInputListener = this.destructibleEnabledInputListener.bind(this)
    this.destructibleSelectListener = this.destructibleSelectListener.bind(this)

    // Transition
    this.transitionEnabledInput = element.querySelector('input[name="transition-enabled"]')
    this.transitionStartSelect = element.querySelector('select[name="transition-start-select"]')
    this.transitionTargetMapTypeSelect = element.querySelector('select[name="transition-target-map-type-select"]')
    this.transitionTargetMapColumnInput = element.querySelector('input[name="transition-target-map-column-input"]')
    this.transitionTargetMapLineInput = element.querySelector('input[name="transition-target-map-line-input"]')
    this.transitionTargetTileColumnInput = element.querySelector('input[name="transition-target-tile-column-input"]')
    this.transitionTargetTileLineInput = element.querySelector('input[name="transition-target-tile-line-input"]')
    this.transitionEndSelect = element.querySelector('select[name="transition-end-select"]')
    this.transitionEnabledInputListener = this.transitionEnabledInputListener.bind(this)
    this.transitionStartSelectListener = this.transitionStartSelectListener.bind(this)
    this.transitionTargetMapTypeSelectListener = this.transitionTargetMapTypeSelectListener.bind(this)
    this.transitionTargetMapColumnInputListener = this.transitionTargetMapColumnInputListener.bind(this)
    this.transitionTargetMapLineInputListener = this.transitionTargetMapLineInputListener.bind(this)
    this.transitionTargetTileColumnInputListener = this.transitionTargetTileColumnInputListener.bind(this)
    this.transitionTargetTileLineInputListener = this.transitionTargetTileLineInputListener.bind(this)
    this.transitionEndSelectListener = this.transitionEndSelectListener.bind(this)

    // Start
    this.startInput = element.querySelector('input[name="starting-tile"]')
    this.startInputListener = this.startInputListener.bind(this)

    this.start()
    this.draw()
  }

  start () {
    const self = this

    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('world-panel:select-tile', (tile) => {
      self.canvas.closest('.panel-body').classList.remove('hidden')
      self.applyTile(tile)
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:general:toggle-block', () => {
      self.toggleDrawBlock()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('editor:cancel', () => {
      self.canvas.closest('.panel-body').classList.add('hidden')
      self.applyTile(undefined)
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-world', () => {
      self.applyTile()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-caverns', () => {
      self.applyTile()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].on('menu:map-selector:display-level1', () => {
      self.applyTile()
      self.draw()
    })
  }

  toggleDrawBlock () {
    this.drawBlock = !this.drawBlock
    this.draw()
  }

  reset () {
    this.element.querySelectorAll('.section').forEach((element) => {
      element.classList.add('hidden')
    })

    if (!this.tile) {
      return
    }

    // Block
    for (let i = 0; i < this.tile.hitbox.length; i++) {
      this.hitboxInputs[i].removeEventListener('change', this.savedHitboxInputListener)
    }

    // Destructible
    this.destructibleEnabledInput.removeEventListener('change', this.savedDestructibleEnabledInputListener)
    this.destructibleSelect.removeEventListener('change', this.savedDestructibleSelectListener)

    // Transition
    this.transitionEnabledInput.removeEventListener('change', this.savedTransitionEnabledInputListener)
    this.transitionStartSelect.removeEventListener('change', this.savedTransitionStartSelectListener)
    this.transitionTargetMapTypeSelect.removeEventListener('change', this.savedTransitionTargetMapTypeSelectListener)
    this.transitionTargetMapColumnInput.removeEventListener('change', this.savedTransitionTargetMapColumnInputListener)
    this.transitionTargetMapLineInput.removeEventListener('change', this.savedTransitionTargetMapLineInputListener)
    this.transitionTargetTileColumnInput.removeEventListener('change', this.savedTransitionTargetTileColumnInputListener)
    this.transitionTargetTileLineInput.removeEventListener('change', this.savedTransitionTargetTileLineInputListener)
    this.transitionEndSelect.removeEventListener('change', this.savedTransitionEndSelectListener)

    // Start
    this.startInput.removeEventListener('change', this.savedStartInputListener)
  }

  applyTile (tile) {
    this.reset()
    this.tile = tile
    if (!tile) {
      return
    }

    this.element.querySelectorAll('.section').forEach((element) => {
      element.classList.remove('hidden')
    })

    // Block
    for (let i = 0; i < this.tile.hitbox.length; i++) {
      this.hitboxInputs[i].checked = this.tile.hitbox[i] === '1'
      this.hitboxInputs[i].addEventListener('change', this.savedHitboxInputListener = this.hitboxInputListener)
    }

    // Destructible
    this.destructibleEnabledInput.checked = !!this.tile.destructible
    this.setSelectValue(this.destructibleSelect, this.tile.destructible)
    this.destructibleEnabledInput.addEventListener('change', this.savedDestructibleEnabledInputListener = this.destructibleEnabledInputListener)
    this.destructibleSelect.addEventListener('change', this.savedDestructibleSelectListener = this.destructibleSelectListener)
    this.destructibleEnabledInput.dispatchEvent(new Event('change'))

    // Transition
    this.transitionEnabledInput.checked = !this.tile.tileTransition.isEmpty()
    this.setSelectValue(this.transitionStartSelect, this.tile.tileTransition.start)
    this.setSelectValue(this.transitionEndSelect, this.tile.tileTransition.end)
    this.setSelectValue(this.transitionTargetMapTypeSelect, this.tile.tileTransition.targetMapType)
    this.transitionTargetMapColumnInput.value = this.tile.tileTransition.targetMapColumn
    this.transitionTargetMapLineInput.value = this.tile.tileTransition.targetMapLine
    this.transitionTargetTileColumnInput.value = this.tile.tileTransition.targetTileColumn
    this.transitionTargetTileLineInput.value = this.tile.tileTransition.targetTileLine
    this.transitionEnabledInput.addEventListener('change', this.savedTransitionEnabledInputListener = this.transitionEnabledInputListener)
    this.transitionStartSelect.addEventListener('change', this.savedTransitionStartSelectListener = this.transitionStartSelectListener)
    this.transitionTargetMapTypeSelect.addEventListener('change', this.savedTransitionTargetMapTypeSelectListener = this.transitionTargetMapTypeSelectListener)
    this.transitionTargetMapColumnInput.addEventListener('change', this.savedTransitionTargetMapColumnInputListener = this.transitionTargetMapColumnInputListener)
    this.transitionTargetMapLineInput.addEventListener('change', this.savedTransitionTargetMapLineInputListener = this.transitionTargetMapLineInputListener)
    this.transitionTargetTileColumnInput.addEventListener('change', this.savedTransitionTargetTileColumnInputListener = this.transitionTargetTileColumnInputListener)
    this.transitionTargetTileLineInput.addEventListener('change', this.savedTransitionTargetTileLineInputListener = this.transitionTargetTileLineInputListener)
    this.transitionEndSelect.addEventListener('change', this.savedTransitionEndSelectListener = this.transitionEndSelectListener)
    this.transitionEnabledInput.dispatchEvent(new Event('change'))

    // Start
    this.startInput.checked = !!this.tile.start
    this.startInput.addEventListener('change', this.savedStartInputListener = this.startInputListener)
  }

  draw () {
    this.context.fillStyle = this.color
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    if (this.tile) {
      this.tile.draw(this.context, -this.tile.x, -this.tile.y)
      if (this.drawBlock) {
        this.context.save()
        this.context.globalAlpha = 0.5
        this.context.fillStyle = 'red'
        this.context.fill(this.tile.blockPath)
        this.context.restore()
      }
    }
  }

  resizePanel (element, event) {
    super.resizePanel(element, event)
    this.canvas.width = _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_WIDTH
    this.canvas.height = _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT
  }

  hitboxInputListener (e) {
    const index = parseInt(e.target.name.split('-').pop())
    const newBlock = e.target.checked ? '1' : '0'
    this.tile.hitbox = this.tile.hitbox.substring(0, index) + newBlock + this.tile.hitbox.substring(index + 1, this.tile.hitbox.length)
    this.tile.recomputePaths()
    this.draw()
  }

  destructibleEnabledInputListener (e) {
    const checked = e.target.checked
    const target = document.querySelector(`#${e.target.dataset.target}`)
    if (checked) {
      target.classList.remove('hidden')
    } else {
      target.classList.add('hidden')
      this.destructibleSelect.selectedIndex = 0
      this.destructibleSelect.dispatchEvent(new Event('change'))
    }
  }

  destructibleSelectListener (e) {
    this.tile.destructible = this.getSelectValue(e.target)
  }

  transitionEnabledInputListener (e) {
    const checked = e.target.checked
    const target = document.querySelector(`#${e.target.dataset.target}`)
    if (checked) {
      target.classList.remove('hidden')
    } else {
      target.classList.add('hidden')
    }
  }

  transitionStartSelectListener (e) {
    this.tile.tileTransition.start = this.getSelectValue(e.target)
  }

  transitionTargetMapTypeSelectListener (e) {
    this.tile.tileTransition.targetMapType = this.getSelectValue(e.target)
  }

  transitionTargetMapColumnInputListener (e) {
    this.tile.tileTransition.targetMapColumn = e.target.value ? parseInt(e.target.value) : undefined
  }

  transitionTargetMapLineInputListener (e) {
    this.tile.tileTransition.targetMapLine = e.target.value ? parseInt(e.target.value) : undefined
  }

  transitionTargetTileColumnInputListener (e) {
    this.tile.tileTransition.targetTileColumn = e.target.value ? parseFloat(e.target.value) : undefined
  }

  transitionTargetTileLineInputListener (e) {
    this.tile.tileTransition.targetTileLine = e.target.value ? parseFloat(e.target.value) : undefined
  }

  transitionEndSelectListener (e) {
    this.tile.tileTransition.end = this.getSelectValue(e.target)
  }

  characterEnabledInputListener (e) {
    const checked = e.target.checked
    const target = document.querySelector(`#${e.target.dataset.target}`)
    if (checked) {
      target.classList.remove('hidden')
    } else {
      target.classList.add('hidden')
    }
  }

  itemEnabledInputListener (e) {
    const checked = e.target.checked
    const target = document.querySelector(`#${e.target.dataset.target}`)
    if (checked) {
      target.classList.remove('hidden')
    } else {
      target.classList.add('hidden')
    }
  }

  startInputListener (e) {
    this.tile.start = !!e.target.checked
    _event__WEBPACK_IMPORTED_MODULE_1__["default"].broadcast('tile:starting-position:select', this.tile)
  }

  getSelectValue (select) {
    return select.options[select.selectedIndex].value
  }

  setSelectValue (select, value) {
    select.selectedIndex = undefined
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value == value) {
        select.selectedIndex = i
      }
    }
  }
}




/***/ }),

/***/ "../assets/js/editor/panel/tile-selector.js":
/*!**************************************************!*\
  !*** ../assets/js/editor/panel/tile-selector.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Panel/abstract-panel */ "../assets/js/editor/panel/abstract-panel.js");
/* harmony import */ var _model_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/tile */ "../assets/js/model/tile.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant */ "../assets/js/constant.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/io */ "../assets/js/utils/io.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resource */ "../assets/js/resource.js");
/* harmony import */ var _model_tile_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/tile-transition */ "../assets/js/model/tile-transition.js");


;







class TileSelectorPanel extends Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  canvas
  context

  worldTiles = []
  cavernsTiles = []
  level1Tiles = []

  selectedColor = 'green'
  hoverColor = 'red'
  color = 'black'
  fillRule = 'nonzero'
  tiles = []

  constructor (element, container, minWidth, minHeight, maxWidth, maxHeight) {
    super(element, container, minWidth, minHeight, maxWidth, maxHeight)

    this.canvas = element.querySelector('canvas')
    this.context = this.canvas.getContext('2d')

    this.init()
  }

  async init () {
    await this.loadTiles()
    this.start()
    this.draw()
  }

  start () {
    const self = this
    this.canvas.addEventListener('mousemove', e => {
      const mouseTile = self.getMouseTile(e.offsetX, e.offsetY)
      self.hover(mouseTile)
    })
    this.canvas.addEventListener('mouseout', e => {
      self.hover()
    })
    this.canvas.addEventListener('click', e => {
      const mouseTile = self.getMouseTile(e.offsetX, e.offsetY)
      self.toggleTileSelection(mouseTile)
    })

    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-world', () => {
      self.tiles = self.worldTiles
      self.resyncTiles()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-caverns', () => {
      self.tiles = self.cavernsTiles
      self.resyncTiles()
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level1', () => {
      self.tiles = self.level1Tiles
      self.resyncTiles()
      self.draw()
    })

    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-world', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-caverns', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level1', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level2', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level3', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level4', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level5', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level6', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level7', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level8', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level9', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })

    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('editor:cancel', () => {
      _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
    })
  }

  hover (tile) {
    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i].tilePath) {
        this.tiles[i].hover = false
      }
    }
    if (tile) {
      tile.hover = true
    }
    this.draw()
  }

  toggleTileSelection (mouseTile) {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      if (mouseTile === tile) {
        tile.selected = !tile.selected
        if (tile.selected) {
          _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:select', tile)
        } else {
          _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('tile-selector-panel:unselect')
        }
      } else {
        tile.selected = false
      }
    }
    this.draw()
  }

  unselectAll () {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      tile.selected = false
    }
    this.draw()
  }

  getMouseTile (mouseX, mouseY) {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      if (this.isPointInPath(tile.tilePath, mouseX, mouseY)) {
        return tile
      }
    }

    return undefined
  }

  draw () {
    this.context.fillStyle = this.color
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].draw(this.context)
    }

    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].draw(this.context)
      this.context.strokeStyle = this.getStrokeColor(this.tiles[i])
      this.context.stroke(this.tiles[i].tilePath)
    }
  }

  getStrokeColor (sprite) {
    if (sprite.selected) {
      return this.selectedColor
    }
    if (sprite.hover) {
      return this.hoverColor
    }
    return this.color
  }

  async loadTiles () {
    const tilesData = await _utils_io__WEBPACK_IMPORTED_MODULE_4__["default"].fetchRemoteFile(_constant__WEBPACK_IMPORTED_MODULE_3__.TILES_PATH)
    for (let i = 0; i < tilesData.world.length; i++) {
      const tileData = tilesData.world[i]
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_5__["default"].getSprite(tileData.sprite)
      const block = tileData.block
      const tile = new _model_tile__WEBPACK_IMPORTED_MODULE_1__.Tile(0, 0, 0, 0, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT, block, sprite.clone(), null, null, new _model_tile_transition__WEBPACK_IMPORTED_MODULE_6__.TileTransition(), false, null, null, null)
      this.worldTiles.push(tile)
    }
    for (let i = 0; i < tilesData.caverns.length; i++) {
      const tileData = tilesData.caverns[i]
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_5__["default"].getSprite(tileData.sprite)
      const block = tileData.block
      const tile = new _model_tile__WEBPACK_IMPORTED_MODULE_1__.Tile(0, 0, 0, 0, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT, block, sprite.clone(), null, null, new _model_tile_transition__WEBPACK_IMPORTED_MODULE_6__.TileTransition(), false, null, null, null)
      this.cavernsTiles.push(tile)
    }
    for (let i = 0; i < tilesData.level1.length; i++) {
      const tileData = tilesData.level1[i]
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_5__["default"].getSprite(tileData.sprite)
      const block = tileData.block
      const tile = new _model_tile__WEBPACK_IMPORTED_MODULE_1__.Tile(0, 0, 0, 0, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT, block, sprite.clone(), null, null, new _model_tile_transition__WEBPACK_IMPORTED_MODULE_6__.TileTransition(), false, null, null, null)
      this.level1Tiles.push(tile)
    }

    this.tiles = this.worldTiles

    this.resyncTiles()
  }

  resyncTiles () {
    let x = 0
    let y = 0
    let isOutOfBounds = false
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      if (isOutOfBounds) {
        tile.x = -_constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH
        tile.y = -_constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT
        continue
      }
      tile.x = x
      tile.y = y
      const path2D = new Path2D()
      path2D.rect(x, y, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT)
      tile.tilePath = path2D

      x += _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH
      if (x + _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_WIDTH > this.canvas.width) {
        x = 0
        y += _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT
        if (y + _constant__WEBPACK_IMPORTED_MODULE_3__.TILE_HEIGHT > this.canvas.height) {
          y = 0
          isOutOfBounds = true
        }
      }
    }
  }

  isPointInPath (path2D, x, y) {
    // this.context.translate(this.canvas.width / 2, this.canvas.height / 2)
    // this.context.scale(this.scale, this.scale)
    // this.context.translate(-this.canvas.width / 2, -this.canvas.height / 2)
    // this.context.translate(this.translateX, this.translateY)

    const isInPath = this.context.isPointInPath(path2D, x, y, this.fillRule)

    // this.context.restore()
    // this.context.setTransform(1, 0, 0, 1, 0, 0)

    return isInPath
  }

  resizePanel (element, event) {
    super.resizePanel(element, event)
    this.resyncTiles()
    this.draw()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileSelectorPanel);


/***/ }),

/***/ "../assets/js/editor/panel/tool-descriptor.js":
/*!****************************************************!*\
  !*** ../assets/js/editor/panel/tool-descriptor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");


;

class ToolDescriptor {
  constructor (
    element
  ) {
    const self = this
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].on('tile-selector-panel:select', tile => {
      const container = document.querySelector('.selected-tile')
      const canvasContainer = container.querySelector('.selected-tile-sprite')
      const canvas = canvasContainer.querySelector('canvas')
      const context = canvas.getContext('2d')
      const image = tile.sprite.images[0]
      self.show(container)
      canvas.width = canvasContainer.offsetWidth
      canvas.height = canvasContainer.offsetHeight
      context.reset()
      context.drawImage(image.file, image.offset.x, image.offset.y, image.width, image.height, 0, 0, canvas.width, canvas.height)
    })
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].on('tile-selector-panel:unselect', () => {
      self.hideAll()
    })
  }

  show (element) {
    this.hideAll()
    element.classList.remove('hidden')
  }

  hideAll () {
    document.querySelectorAll('.tool-descriptor>*').forEach(el => {
      el.classList.add('hidden')
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolDescriptor);


/***/ }),

/***/ "../assets/js/editor/panel/world.js":
/*!******************************************!*\
  !*** ../assets/js/editor/panel/world.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Panel/abstract-panel */ "../assets/js/editor/panel/abstract-panel.js");
/* harmony import */ var _model_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/tile */ "../assets/js/model/tile.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event */ "../assets/js/editor/event.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant */ "../assets/js/constant.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../history */ "../assets/js/editor/history.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/io */ "../assets/js/utils/io.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resource */ "../assets/js/resource.js");
/* harmony import */ var _model_tile_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/tile-transition */ "../assets/js/model/tile-transition.js");
/* harmony import */ var _service_world_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/world-manager */ "../assets/js/service/world-manager.js");


;









const DISPLAY_WORLD = 'world'
const DISPLAY_CAVERNS = 'caverns'
const DISPLAY_LEVEL1 = 'level1'
const MODE_NONE = 'none'
const MODE_DRAG = 'drag'
const MODE_SPRITE = 'stripe'

class WorldPanel extends Panel_abstract_panel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  canvas
  context

  worldTiles = []
  cavernsTiles = []
  level1Tiles = []
  level2Tiles = []
  level3Tiles = []
  level4Tiles = []
  level5Tiles = []
  level6Tiles = []
  level7Tiles = []
  level8Tiles = []
  level9Tiles = []

  tiles = []
  selectedColor = 'green'
  hoverColor = 'red'
  color = 'black'
  fillRule = 'nonzero'
  scale = 1.0
  scaleMultiplier = 0.02
  maxScale = 1.0
  minScale = 0.22
  translateX = 0
  translateY = 0
  translateMultiplier = 10
  drawBlock = false
  mode = MODE_NONE
  display = DISPLAY_WORLD

  constructor (element, container, minWidth, minHeight, maxWidth, maxHeight) {
    super(element, container, minWidth, minHeight, maxWidth, maxHeight)

    this.canvas = element.querySelector('canvas')
    this.context = this.canvas.getContext('2d')

    this.init()
  }

  async init () {
    this.start()
    await this.importEmptyWorld()
    this.draw()
  }

  start () {
    const self = this
    let mouseDown = false
    this.canvas.addEventListener('mousedown', e => {
      mouseDown = true
      if (self.mode === MODE_NONE) {
        self.mode = MODE_DRAG
      }
    })
    this.canvas.addEventListener('mouseup', e => {
      mouseDown = false
      if (self.mode === MODE_DRAG) {
        self.mode = MODE_NONE
      }
    })
    this.canvas.addEventListener('mousein', e => {
      if (self.mode === MODE_DRAG) {
        self.mode === MODE_NONE
      }
    })
    this.canvas.addEventListener('mouseout', e => {
      if (self.mode === MODE_DRAG) {
        self.mode === MODE_NONE
      }
      if (self.mode === MODE_NONE) {
        self.hover()
      }
    })
    this.canvas.addEventListener('mousemove', e => {
      const mouseTile = self.getMouseTile(e.offsetX, e.offsetY)
      const mouseMap = self.getMouseMap(e.offsetX, e.offsetY)
      if (self.mode === MODE_SPRITE && !!mouseDown) {
        const newTile = self.applyTile(mouseMap, mouseTile, self.selectedTile.clone())
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-map', mouseMap)
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-tile', newTile)
        return
      }
      if (self.mode === MODE_DRAG) {
        self.translate(e.movementX, e.movementY)
        return
      }
      if (self.mode === MODE_NONE || !mouseDown) {
        self.hover(mouseTile)
      }
    })
    this.canvas.addEventListener('click', e => {
      const mouseTile = self.getMouseTile(e.offsetX, e.offsetY)
      const mouseMap = self.getMouseMap(e.offsetX, e.offsetY)
      if (self.mode === MODE_SPRITE) {
        const newTile = self.applyTile(mouseMap, mouseTile, self.selectedTile.clone())
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-map', mouseMap)
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-tile', newTile)
        return
      }
      if (self.mode === MODE_DRAG) {
        return
      }
      if (self.mode === MODE_NONE) {
        self.select(mouseTile)
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-map', mouseMap)
        _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('world-panel:select-tile', mouseTile)
      }
    })
    this.canvas.addEventListener('wheel', e => {
      self.zoom(e.deltaY < 0)
    })

    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-world', () => {
      self.tiles = self.worldTiles
      self.display = DISPLAY_WORLD
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-caverns', () => {
      self.tiles = self.cavernsTiles
      self.display = DISPLAY_CAVERNS
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:map-selector:display-level1', () => {
      self.tiles = self.level1Tiles
      self.display = DISPLAY_LEVEL1
      self.draw()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:import-world-json', async () => {
      const data = await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].openFile(_constant__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_JSON)
      self.importWorld(data)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:import-default-world-loz', async () => {
      const data = await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].fetchRemoteFile(_constant__WEBPACK_IMPORTED_MODULE_3__.PATH_DATA_GAME)
      self.importWorld(data)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:import-world-loz', async () => {
      const data = await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].openFile(_constant__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_LOZ)
      self.importWorld(data)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:export-world-json', async () => {
      const data = JSON.stringify(_service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].exportGame())
      await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].dowloadFile(data, _constant__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_JSON)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:export-world-loz', async () => {
      const data = JSON.stringify(_service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].exportGame())
      await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].dowloadFile(data, _constant__WEBPACK_IMPORTED_MODULE_3__.FILE_TYPE_LOZ)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('menu:general:toggle-block', () => {
      self.toggleDrawBlock()
    })

    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('tile-selector-panel:select', tile => {
      self.selectedTile = tile
      self.mode = MODE_SPRITE
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('tile-selector-panel:unselect', () => {
      self.selectedTile = undefined
      self.mode = MODE_NONE
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('editor:cancel', () => {
      self.select()
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('tile:starting-position:select', (tile) => {
      self.selectStartingPosition(tile)
    })
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].on('map-panel:update', () => {
      self.draw()
    })
  }

  selectStartingPosition (tile) {
    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].start = (this.tiles[i] === tile)
    }
  }

  toggleDrawBlock () {
    this.drawBlock = !this.drawBlock
    this.draw()
  }

  getMouseMap (mouseX, mouseY) {
    for (const map of _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].mapsIterator(this.display)) {
      if (map.mapPath && this.isPointInPath(map.mapPath, mouseX, mouseY)) {
        return map
      }
    }

    return undefined
  }

  getMouseTile (mouseX, mouseY) {
    for (const map of _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].mapsIterator(this.display)) {
      for (const tile of map.tilesIterator()) {
        if (tile.tilePath && this.isPointInPath(tile.tilePath, mouseX, mouseY)) {
          return tile
        }
      }
    }

    return undefined
  }

  zoom (zoomIn) {
    const multiplier = zoomIn ? this.scaleMultiplier : -this.scaleMultiplier
    const scaleIncrement = +(multiplier).toFixed(2)
    let newScale = this.scale + scaleIncrement
    newScale = Math.min(newScale, this.maxScale)
    newScale = Math.max(newScale, this.minScale)
    this.scale = newScale
    this.draw()
  }

  translate (movementX, movementY) {
    this.translateX += (movementX / this.scale)
    this.translateY += (movementY / this.scale)
    this.draw()
  }

  hover (tile) {
    for (const map of _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].mapsIterator(this.display)) {
      for (const tile of map.tilesIterator()) {
        if (tile.tilePath) {
          tile.hover = false
        }
      }
    }
    if (tile) {
      tile.hover = true
    }
    this.draw()
  }

  select (tile) {
    for (const map of _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].mapsIterator(this.display)) {
      for (const tile of map.tilesIterator()) {
        if (tile.tilePath) {
          tile.selected = false
        }
      }
    }
    if (tile) {
      tile.selected = true
    }
    this.draw()
  }

  draw () {
    this.context.fillStyle = this.color
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2)
    this.context.scale(this.scale, this.scale)
    this.context.translate(-this.canvas.width / 2, -this.canvas.height / 2)
    this.context.translate(this.translateX, this.translateY)

    for (const map of _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].mapsIterator(this.display)) {
      map.draw(this.context)

      // Block drawing
      this.context.save()
      this.context.globalAlpha = 0.5
      this.context.fillStyle = 'red'
      for (const tile of map.tilesIterator()) {
        if (this.drawBlock && !tile.selected && !tile.hover) {
          this.context.fill(tile.blockPath)
        }
      }
      this.context.restore()

      // Map limit
      this.context.save()
      this.context.strokeStyle = 'grey'
      this.context.lineWidth = 4
      this.context.strokeRect(map.x, map.y, map.width, map.height)
      this.context.restore()

      // Tiles limit
      this.context.save()
      this.context.lineWidth = 1
      for (const tile of map.tilesIterator()) {
        this.context.strokeStyle = this.getStrokeColor(tile)
        this.context.stroke(tile.tilePath)
      }
      this.context.restore()

      // Selected/hover tile
      this.context.save()
      for (const tile of map.tilesIterator()) {
        this.context.globalAlpha = 0.5
        this.context.fillStyle = this.getStrokeColor(tile)
        if (tile.selected) {
          this.context.fill(tile.tilePath)
        }
        if (tile.hover) {
          this.context.fill(tile.tilePath)
        }
      }
      this.context.restore()
    }

    this.context.setTransform(1, 0, 0, 1, 0, 0)
  }

  isPointInPath (path2D, x, y) {
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2)
    this.context.scale(this.scale, this.scale)
    this.context.translate(-this.canvas.width / 2, -this.canvas.height / 2)
    this.context.translate(this.translateX, this.translateY)

    const isInPath = this.context.isPointInPath(path2D, x, y, this.fillRule)

    this.context.restore()
    this.context.setTransform(1, 0, 0, 1, 0, 0)

    return isInPath
  }

  getStrokeColor (tile) {
    if (tile.selected) {
      return this.selectedColor
    }
    if (tile.hover) {
      return this.hoverColor
    }
    return this.color
  }

  applyTile (map, oldTile, newTile) {
    if (!oldTile || !newTile || oldTile === newTile) {
      return
    }

    const tileColumn = oldTile.column
    const tileLine = oldTile.line

    let clonedCharacter = null
    if (newTile.character) {
      clonedCharacter = newTile.character.clone()
    }
    let clonedItem = null
    if (newTile.item) {
      clonedItem = newTile.item.clone()
    }
    let clonedOther = null
    if (newTile.other) {
      clonedOther = newTile.other.clone()
    }
    const tile = new _model_tile__WEBPACK_IMPORTED_MODULE_1__.Tile(oldTile.column, oldTile.line, oldTile.x, oldTile.y, oldTile.width, oldTile.height, newTile.hitbox, newTile.sprite.clone(), newTile.block, newTile.desctructible, newTile.tileTransition.clone(), newTile.start, clonedCharacter, clonedItem, clonedOther)
    const tilePath = new Path2D()
    tilePath.rect(tile.x, tile.y, tile.width, tile.height)
    tile.tilePath = tilePath

    _history__WEBPACK_IMPORTED_MODULE_4__["default"].push(this, () => this.applyTile(map, tile.clone(), oldTile.clone()), () => this.applyTile(map, oldTile.clone(), tile.clone()))
    map.tiles[tileColumn][tileLine] = tile

    this.draw()

    return tile
  }

  importWorld (gameData) {
    _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].createMaps(gameData)
    _event__WEBPACK_IMPORTED_MODULE_2__["default"].broadcast('menu:map-selector:display-world')

    _history__WEBPACK_IMPORTED_MODULE_4__["default"].reset()

    this.draw()
  }

  async importEmptyWorld () {
    const gameData = await _utils_io__WEBPACK_IMPORTED_MODULE_5__["default"].fetchRemoteFile(_constant__WEBPACK_IMPORTED_MODULE_3__.PATH_DATA_EMPTY_WORLD)
    _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].createMaps(gameData)
  }

  resizePanel (element, event) {
    super.resizePanel(element, event)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorldPanel);


/***/ }),

/***/ "../assets/js/model/character.js":
/*!***************************************!*\
  !*** ../assets/js/model/character.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Character: () => (/* binding */ Character)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _service_text_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/text-manager */ "../assets/js/service/text-manager.js");


;


class Character {
  constructor (column, line, x, y, width, height, sprite, text) {
    this.column = column
    this.line = line
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.sprite = sprite
    this.text = text
    this.displayedText = ''
  }

  init () {
    this.sprite.start()
  }

  reset () {
    this.sprite.stop()
    this.displayedText = ''
  }

  hasStoppedTalking() {
    return this.displayedText === this.text
  }

  draw (context) {
    this.sprite.draw(context, this.x, this.y, this.width, this.height)

    _service_text_manager__WEBPACK_IMPORTED_MODULE_1__["default"].draw(context, this.text, _constant__WEBPACK_IMPORTED_MODULE_0__.SPRITE_TEXT_COLOR_WHITE, this.x - 4.5 * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH, this.y - 1.5 * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT, 10 * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH, 1.5 * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT, this.displayedText.length)
  }
}




/***/ }),

/***/ "../assets/js/model/extra.js":
/*!***********************************!*\
  !*** ../assets/js/model/extra.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Extra: () => (/* binding */ Extra)
/* harmony export */ });


class Extra {
  constructor (column, line, x, y, width, height, sprite) {
    this.column = column
    this.line = line
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.sprite = sprite
  }

  init () {
    this.sprite.start()
  }

  reset () {
    this.sprite.stop()
  }

  draw (context) {
    this.sprite.draw(context, this.x, this.y, this.width, this.height)
  }
}




/***/ }),

/***/ "../assets/js/model/map.js":
/*!*********************************!*\
  !*** ../assets/js/model/map.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Map: () => (/* binding */ Map)
/* harmony export */ });


class Map {
  constructor (column, line, x, y, width, height, type, tiles, characters, extras) {
    this.column = column
    this.line = line
    this.x = x
    this.y = y
    this.offsetX = 0
    this.offsetY = 0
    this.width = width
    this.height = height
    this.type = type
    this.tiles = tiles
    this.characters = characters
    this.extras = extras

    this.savedItems = []
    this.savedCharacters = []
    this.mapPath = this.getMapPath()
  }

  get character() {
    return this.characters[0]
  }

  getMapPath () {
    const path = new Path2D()
    path.rect(this.x, this.y, this.width, this.height)

    return path
  }

  init () {
    for (const character of this.characters) {
      character.init()
    }
    for (const extra of this.extras) {
      extra.init()
    }
  }

  reset () {
    for (const character of this.characters) {
      character.reset()
    }
    for (const extra of this.extras) {
      extra.reset()
    }
  }

  draw (context) {
    context.save()
    context.translate(this.offsetX, this.offsetY)
    const tileOffsetX = this.x
    const tileOffsetY = this.y

    for (const tile of this.tilesIterator()) {
      tile.draw(context)
    }

    for (const character of this.characters) {
      character.draw(context)
    }

    for (const extra of this.extras) {
      extra.draw(context)
    }

    /* for (let i = 0; i < this.miscs.length; i++) {
      this.miscs[i].draw(context, tileOffsetX, tileOffsetY)
    }

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].draw(context, tileOffsetX, tileOffsetY)
    }

    for (let i = 0; i < this.characters.length; i++) {
      this.characters[i].draw(context, tileOffsetX, tileOffsetY)
    } */
    context.translate(-this.offsetX, -this.offsetY)
    context.restore()
  }

  drawBlockingZones (context, color) {
    context.save()
    context.translate(this.offsetX, this.offsetY)
    context.globalAlpha = 0.5
    context.fillStyle = color
    for (const tile of this.tilesIterator()) {
      context.fill(tile.blockPath)
    }
    context.translate(-this.offsetX, -this.offsetY)
    context.restore()
  }

  * tilesIterator () {
    for (let column = 0; column < this.tiles.length; column++) {
      for (let line = 0; line < this.tiles[column].length; line++) {
        yield this.tiles[column][line]
      }
    }
  }

  getTile (column, line) {
    return this.tiles[column] ? this.tiles[column][line] : undefined
  }
}




/***/ }),

/***/ "../assets/js/model/resource/sound.js":
/*!********************************************!*\
  !*** ../assets/js/model/resource/sound.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sound: () => (/* binding */ Sound)
/* harmony export */ });


class Sound {
  constructor (name, buffer, context, gain, duration, loop, loopStart, loopEnd) {
    this.name = name
    this.buffer = buffer
    this.context = context
    this.gain = gain
    this.duration = duration
    this.loop = loop
    this.loopStart = loopStart
    this.loopEnd = loopEnd
    this.source = undefined
  }

  play () {
    this.source = this.context.createBufferSource()
    this.source.buffer = this.buffer
    this.source.connect(this.gain)
    this.source.loop = this.loop
    this.source.loopStart = this.loopStart
    this.source.loopEnd = this.loopEnd
    this.source.start(0)
  }

  stop () {
    if (this.source) {
      this.source.stop(0)
    }
  }
}




/***/ }),

/***/ "../assets/js/model/resource/sprite.js":
/*!*********************************************!*\
  !*** ../assets/js/model/resource/sprite.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sprite: () => (/* binding */ Sprite),
/* harmony export */   SpriteImage: () => (/* binding */ SpriteImage)
/* harmony export */ });


// TODO remove this and handle draw directly in Sprite class
class SpriteImage {
  constructor (name, file, offset, width, height) {
    this.name = name
    this.file = file
    this.offset = offset
    this.width = width
    this.height = height
  }

  draw (context, x, y, w, h, dx, dy, dw, dh) {
    if (dx !== undefined && dy !== undefined && dw !== undefined && dh !== undefined) {
      context.drawImage(this.file, this.offset.x + x, this.offset.y + y, w, h, dx, dy, dw, dh)
      return
    }

    context.drawImage(this.file, this.offset.x, this.offset.y, this.width, this.height, x, y, w, h)
  }
}

class Sprite {
  constructor (name, type, images) {
    this.name = name
    this.type = type
    this.images = images

    this.currentImageIndex = 0
    this.incrementSpeed = 200
    this.incrementInterval = undefined
  }

  clone () {
    return new Sprite(this.name, this.type, this.images)
  }

  start () {
    if (this.incrementInterval) {
      return
    }

    const self = this

    this.incrementImageIndex()
    this.incrementInterval = setInterval(() => {
      self.incrementImageIndex()
    }, this.incrementSpeed)

    return this
  }

  stop () {
    clearInterval(this.incrementInterval)
    this.incrementInterval = undefined

    return this
  }

  incrementImageIndex () {
    if (!this.images) {
      return
    }

    this.currentImageIndex++
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0
    }
  }

  draw (context, x, y, w, h, x2, y2, w2, h2) {
    if (!this.images || !this.images[this.currentImageIndex]) {
      return
    }

    this.images[this.currentImageIndex].draw(context, x, y, w, h, x2, y2, w2, h2)
  }

  get width () {
    return this.images[this.currentImageIndex]?.width
  }

  get height () {
    return this.images[this.currentImageIndex]?.height
  }
}




/***/ }),

/***/ "../assets/js/model/tile-transition.js":
/*!*********************************************!*\
  !*** ../assets/js/model/tile-transition.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileTransition: () => (/* binding */ TileTransition)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _service_world_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/world-manager */ "../assets/js/service/world-manager.js");


;


class TileTransition {
  constructor (start, targetMapType, targetMapColumn, targetMapLine, targetTileColumn, targetTileLine, end) {
    this.start = start
    this.targetMapType = targetMapType
    this.targetMapColumn = targetMapColumn
    this.targetMapLine = targetMapLine
    this.targetTileColumn = targetTileColumn
    this.targetTileLine = targetTileLine
    this.end = end
    this.enabled = true
  }

  isEmpty () {
    return !this.start && !this.targetMapType && !this.targetMapColumn && !this.targetMapLine && !this.targetTileColumn && !this.targetTileLine && !this.end
  }

  getTargetMap () {
    return _service_world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getMap(this.targetMapType, this.targetMapColumn, this.targetMapLine)
  }

  getTargetPosition () {
    return {
      x: this.getTargetMap().x + this.targetTileColumn * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH,
      y: this.getTargetMap().y + this.targetTileLine * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT
    }
  }

  clone () {
    return new TileTransition(this.start, this.targetMapType, this.targetMapColumn, this.targetMapLine, this.targetTileColumn, this.targetTileLine, this.end)
  }
}




/***/ }),

/***/ "../assets/js/model/tile.js":
/*!**********************************!*\
  !*** ../assets/js/model/tile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _tile_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile-transition */ "../assets/js/model/tile-transition.js");


;

class Tile {
  constructor (column, line, x, y, width, height, hitbox, sprite, block, desctructible, tileTransition, start) {
    this.column = column
    this.line = line
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.hitbox = hitbox
    this.sprite = sprite
    this.transition = undefined
    this.tilePath = this.getTilePath()
    this.blockPath = this.getBlockPath()
    this.block = block
    this.desctructible = desctructible
    this.tileTransition = tileTransition
    this.start = start
  }

  recomputePaths () {
    this.tilePath = this.getTilePath()
    this.blockPath = this.getBlockPath()
  }

  clone () {
    return new Tile(this.column, this.line, this.x, this.y, this.width, this.height, this.hitbox, this.sprite.clone(), this.block, this.desctructible, this.tileTransition.clone())
  }

  draw (context, offsetX, offsetY) {
    const tileOffsetX = offsetX !== undefined ? this.x + offsetX : this.x
    const tileOffsetY = offsetY !== undefined ? this.y + offsetY : this.y

    this.sprite.draw(context, tileOffsetX, tileOffsetY, this.width, this.height)
    if (this.other) {
      this.other.draw(context, tileOffsetX, tileOffsetY, this.width, this.height)
    }
  }

  getTilePath () {
    const path = new Path2D()
    path.rect(this.x, this.y, this.width, this.height)

    return path
  }

  getBlockPath () {
    if (typeof this.hitbox !== 'string') {
      return
    }

    const points = []
    if (this.hitbox.charAt(0) === '1') {
      points.push([this.x, this.y])
    }
    if (this.hitbox.charAt(1) === '1') {
      points.push([this.x + this.width / 2, this.y])
    }
    if (this.hitbox.charAt(2) === '1') {
      points.push([this.x + this.width, this.y])
    }
    if (this.hitbox.charAt(3) === '1') {
      points.push([this.x + this.width, this.y + this.height / 2])
    }
    if (this.hitbox.charAt(4) === '1') {
      points.push([this.x + this.width, this.y + this.height])
    }
    if (this.hitbox.charAt(5) === '1') {
      points.push([this.x + this.width / 2, this.y + this.height])
    }
    if (this.hitbox.charAt(6) === '1') {
      points.push([this.x, this.y + this.height])
    }
    if (this.hitbox.charAt(7) === '1') {
      points.push([this.x, this.y + this.height / 2])
    }

    const path = new Path2D()
    if (points[0]) {
      path.moveTo(points[0][0], points[0][1])
    }
    for (let i = 1; i < points.length; i++) {
      path.lineTo(points[i][0], points[i][1])
    }

    return path
  }
}




/***/ }),

/***/ "../assets/js/resource.js":
/*!********************************!*\
  !*** ../assets/js/resource.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/io */ "../assets/js/utils/io.js");
/* harmony import */ var _service_sound_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/sound-manager */ "../assets/js/service/sound-manager.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "../assets/js/constant.js");
/* harmony import */ var _model_resource_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/resource/sprite */ "../assets/js/model/resource/sprite.js");
/* harmony import */ var _model_resource_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/resource/sound */ "../assets/js/model/resource/sound.js");


;





const sprites = {}
const sounds = {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadAll: async function () {
    const resources = await _utils_io__WEBPACK_IMPORTED_MODULE_0__["default"].fetchRemoteFiles(_constant__WEBPACK_IMPORTED_MODULE_2__.PATH_DATA_SPRITES, _constant__WEBPACK_IMPORTED_MODULE_2__.PATH_SPRITES_IMAGE, _constant__WEBPACK_IMPORTED_MODULE_2__.PATH_DATA_SOUNDS, _constant__WEBPACK_IMPORTED_MODULE_2__.PATH_AUDIO_SOUNDS)
    const dataSprites = resources[0]
    const spritesImage = resources[1]
    const dataSounds = resources[2]
    const audioSounds = resources[3]
    this.loadSprites(dataSprites, spritesImage)
    await this.loadSounds(dataSounds, audioSounds)
  },
  loadSprites: async function (dataSprites, spritesImage) {
    if (!dataSprites || !spritesImage) {
      const resources = await _utils_io__WEBPACK_IMPORTED_MODULE_0__["default"].fetchRemoteFiles(_constant__WEBPACK_IMPORTED_MODULE_2__.PATH_DATA_SPRITES, _constant__WEBPACK_IMPORTED_MODULE_2__.PATH_SPRITES_IMAGE)
      dataSprites = resources[0]
      spritesImage = resources[1]
    }
    for (let i = 0; i < dataSprites.length; i++) {
      const dataSprite = dataSprites[i]
      const name = dataSprite.name
      const type = dataSprite.type
      // Several image parts for one Sprite
      const images = dataSprite.offsets.map((offset) => new _model_resource_sprite__WEBPACK_IMPORTED_MODULE_3__.SpriteImage(name, spritesImage, { x: offset.x * _constant__WEBPACK_IMPORTED_MODULE_2__.SPRITE_WIDTH, y: offset.y * _constant__WEBPACK_IMPORTED_MODULE_2__.SPRITE_HEIGHT }, _constant__WEBPACK_IMPORTED_MODULE_2__.SPRITE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_2__.SPRITE_HEIGHT))
      sprites[name] = new _model_resource_sprite__WEBPACK_IMPORTED_MODULE_3__.Sprite(name, type, images)
    }
  },
  cloneSprite: (name) => {
    return sprites[name] ? sprites[name].clone() : undefined
  },
  getSprite: (name) => {
    return sprites[name]
  },
  loadSounds: async function (dataSounds, audioSounds) {
    const context = _service_sound_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getContext()
    const gainNode = _service_sound_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getGainNode()
    if (!context || !gainNode) {
      throw new Error('Audio context must be initialized before loading sounds')
    }
    if (!dataSounds || !audioSounds) {
      const resources = await _utils_io__WEBPACK_IMPORTED_MODULE_0__["default"].fetchRemoteFiles(_constant__WEBPACK_IMPORTED_MODULE_2__.PATH_DATA_SOUNDS, _constant__WEBPACK_IMPORTED_MODULE_2__.PATH_AUDIO_SOUNDS)
      dataSounds = resources[0]
      audioSounds = resources[1]
    }
    for (let i = 0; i < dataSounds.length; i++) {
      const dataSound = dataSounds[i]
      const bytes = dataSound.bytes
      const offset = dataSound.offset
      const arrayBuffer = audioSounds.slice(offset, offset + bytes)
      const audioBuffer = await context.decodeAudioData(arrayBuffer)
      const name = dataSound.name
      const duration = dataSound.duration || undefined
      const loop = dataSound.loop || false
      const loopEnd = dataSound.loop_end || 0
      const loopStart = dataSound.loop_start || 0
      sounds[name] = new _model_resource_sound__WEBPACK_IMPORTED_MODULE_4__.Sound(name, audioBuffer, context, gainNode, duration, loop, loopStart, loopEnd)
    }
  },
  cloneSound: (name) => {
    return sounds[name] ? sounds[name].clone() : undefined
  },
  getSound: (name) => {
    return sounds[name]
  }
});


/***/ }),

/***/ "../assets/js/service/hitbox-manager.js":
/*!**********************************************!*\
  !*** ../assets/js/service/hitbox-manager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;

// @see https://www.npmjs.com/package/polybooljs
const PolyBool = __webpack_require__(/*! polybooljs */ "../node_modules/polybooljs/index.js")

const HitboxManager = {
  getHitboxFromString: function (x, y, width, height, hitboxString) {
    var hitbox = []

    if (hitboxString.charAt(0) === '1') {
      hitbox.push([x, y])
    }
    if (hitboxString.charAt(1) === '1') {
      hitbox.push([x + width / 2, y])
    }
    if (hitboxString.charAt(2) === '1') {
      hitbox.push([x + width, y])
    }
    if (hitboxString.charAt(3) === '1') {
      hitbox.push([x + width, y + height / 2])
    }
    if (hitboxString.charAt(4) === '1') {
      hitbox.push([x + width, y + height])
    }
    if (hitboxString.charAt(5) === '1') {
      hitbox.push([x + width / 2, y + height])
    }
    if (hitboxString.charAt(6) === '1') {
      hitbox.push([x, y + height])
    }
    if (hitboxString.charAt(7) === '1') {
      hitbox.push([x, y + height / 2])
    }

    var hitbox = {
      regions: [hitbox],
      inverted: false
    }

    return PolyBool.polygon(PolyBool.segments(hitbox))
  },

  getPathFromString: function (x, y, width, height, hitboxString) {
    const hitbox = []
    if (hitboxString.charAt(0) === '1') {
      hitbox.push([x, y])
    }
    if (hitboxString.charAt(1) === '1') {
      hitbox.push([x + width / 2, y])
    }
    if (hitboxString.charAt(2) === '1') {
      hitbox.push([x + width, y])
    }
    if (hitboxString.charAt(3) === '1') {
      hitbox.push([x + width, y + height / 2])
    }
    if (hitboxString.charAt(4) === '1') {
      hitbox.push([x + width, y + height])
    }
    if (hitboxString.charAt(5) === '1') {
      hitbox.push([x + width / 2, y + height])
    }
    if (hitboxString.charAt(6) === '1') {
      hitbox.push([x, y + height])
    }
    if (hitboxString.charAt(7) === '1') {
      hitbox.push([x, y + height / 2])
    }

    const path = new Path2D()
    if (hitbox[0]) {
      path.moveTo(hitbox[0][0], hitbox[0][1])
    }
    for (let i = 1; i < hitbox.length; i++) {
      path.lineTo(hitbox[i][0], hitbox[i][1])
    }

    return path
  },

  compute: function (object) {
    const hitbox = {
      regions: [[
        [object.x, object.y],
        [object.x + object.width, object.y],
        [object.x + object.width, object.y + object.height],
        [object.x, object.y + object.height]
      ]],
      inverted: false
    }

    return hitbox
  },

  computeMapHitbox: function (map) {
    const hitbox = {
      regions: [],
      inverted: false
    }

    for (let i = 0; i < map.tiles.length; i++) {
      if (map.tiles[i].hitbox.regions[0]) {
        hitbox.regions.push(map.tiles[i].hitbox.regions[0])
      }
    }

    return PolyBool.union(hitbox, { regions: [], inverted: false })
  },

  computeMapHitboxV2: function (map) {
    const hitbox = {
      regions: [],
      inverted: false
    }

    for (const tile of map.tilesIterator()) {
      if (tile.block.regions && tile.block.regions[0]) {
        hitbox.regions.push(tile.block.regions[0])
      }
    }

    return PolyBool.union(hitbox, { regions: [], inverted: false })
  },

  computeHitboxesCollision: function (hitobx1, hitbox2) {
    const intersection = PolyBool.intersect(hitobx1, hitbox2)
    if (intersection && intersection.regions && intersection.regions.length > 0) {
      return intersection
    }

    return undefined
  },

  getMinX: function (hitbox) {
    if (!hitbox.regions) {
      return undefined
    }

    let x
    for (let i = 0; i < hitbox.regions.length; i++) {
      for (let j = 0; j < hitbox.regions[i].length; j++) {
        if (x === undefined || x > hitbox.regions[i][j][0]) {
          x = hitbox.regions[i][j][0]
        }
      }
    }

    return x
  },

  getMaxX: function (hitbox) {
    if (!hitbox.regions) {
      return undefined
    }

    let x
    for (let i = 0; i < hitbox.regions.length; i++) {
      for (let j = 0; j < hitbox.regions[i].length; j++) {
        if (x === undefined || x < hitbox.regions[i][j][0]) {
          x = hitbox.regions[i][j][0]
        }
      }
    }

    return x
  },

  getMinY: function (hitbox) {
    if (!hitbox.regions) {
      return undefined
    }

    let y
    for (let i = 0; i < hitbox.regions.length; i++) {
      for (let j = 0; j < hitbox.regions[i].length; j++) {
        if (y === undefined || y > hitbox.regions[i][j][1]) {
          y = hitbox.regions[i][j][1]
        }
      }
    }

    return y
  },

  getMaxY: function (hitbox) {
    if (!hitbox.regions) {
      return undefined
    }

    let y
    for (let i = 0; i < hitbox.regions.length; i++) {
      for (let j = 0; j < hitbox.regions[i].length; j++) {
        if (y === undefined || y < hitbox.regions[i][j][1]) {
          y = hitbox.regions[i][j][1]
        }
      }
    }

    return y
  },

  draw: function (context, hitbox, offsetX, offsetY, color) {
    if (offsetX === undefined) {
      offsetX = 0
    }
    if (offsetY === undefined) {
      offsetY = 0
    }

    context.save()
    context.globalAlpha = 0.5
    context.fillStyle = color

    for (let i = 0; i < hitbox.regions.length; i++) {
      context.beginPath()
      for (let j = 0; j < hitbox.regions[i].length; j++) {
        if (j === 0) {
          context.moveTo(hitbox.regions[i][j][0] + offsetX, hitbox.regions[i][j][1] + offsetY)
          continue
        }
        context.lineTo(hitbox.regions[i][j][0] + offsetX, hitbox.regions[i][j][1] + offsetY)
      }
      context.closePath()
      context.fill()
    }

    context.restore()
  },

  getCurrentTiles: function (map, link) {
    const currentTiles = []
    for (const tile of map.tilesIterator()) {
      if (
        (tile.x <= link.x && link.x <= tile.x + tile.width && tile.y <= link.y && link.y <= tile.y + tile.height) || // link (x,y) is in tile
                (tile.x <= link.x + link.width && link.x + link.width <= tile.x + tile.width && tile.y <= link.y && link.y <= tile.y + tile.height) || // link (x+w,y) is in tile
                (tile.x <= link.x + link.width && link.x + link.width <= tile.x + tile.width && tile.y <= link.y + link.height && link.y + link.height <= tile.y + tile.height) || // link (x+w,y+h) is in tile
                (tile.x <= link.x && link.x <= tile.x + tile.width && tile.y <= link.y + link.height && link.y + link.height <= tile.y + tile.height) // link (x,y+h) is in tile
      ) {
        currentTiles.push(tile)
      }
    }

    return currentTiles
  },

  getLinkTile: function (map, link) {
    const linkCenterX = link.x + link.width / 2
    const linkCenterY = link.y + link.height / 2
    const delta = 2
    for (const tile of map.tilesIterator()) {
      if (tile.x <= linkCenterX + delta && linkCenterX <= tile.x + tile.width - delta && tile.y <= linkCenterY + delta && linkCenterY <= tile.y + tile.height - delta) {
        return tile
      }
    }

    return undefined
  },

  getLinkFrontTile: function (map, link) {
    const linkTile = link.tile ?? this.getLinkTile(map, link)
    if (!linkTile) {
      return undefined
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_WEST && linkTile.x >= link.x) {
      return map.getTile(linkTile.column - 1, linkTile.line)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_NORTH && linkTile.y >= link.y) {
      return map.getTile(linkTile.column, linkTile.line - 1)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_EAST && linkTile.x + linkTile.width <= link.x + link.width) {
      return map.getTile(linkTile.column + 1, linkTile.line)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_SOUTH && linkTile.y + linkTile.height <= link.y + link.height) {
      return map.getTile(linkTile.column, linkTile.line + 1)
    }
    return linkTile
  },

  getReachedMapEdge: function (map, link) {
    if (map.x >= link.x) {
      return _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_WEST
    }
    if (map.y >= link.y) {
      return _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_NORTH
    }
    if (map.x + map.width <= link.x) {
      return _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_EAST
    }
    if (map.y + map.height <= link.y) {
      return _constant__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_SOUTH
    }
    return undefined
  },

  getHorizontalCenter: function (hitbox) {
    const minX = this.getMinX(hitbox)
    const maxX = this.getMaxX(hitbox)

    return minX + (maxX - minX) / 2
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HitboxManager);


/***/ }),

/***/ "../assets/js/service/sound-manager.js":
/*!*********************************************!*\
  !*** ../assets/js/service/sound-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


let context
let gainNode

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  initContext () {
    context = new AudioContext()
    context.suspend()
    context.createGain = context.createGain ? context.createGain : context.createGainNode
    gainNode = context.createGain()
    gainNode.connect(context.destination)
  },
  initEvents (playSoundsCheckbox, volumeRangeInput) {
    const self = this
    volumeRangeInput.addEventListener('change', (e) => {
      e.preventDefault()
      self.updateVolume(parseInt(e.target.value) / parseInt(e.target.max))
    })
    volumeRangeInput.value = 50
    volumeRangeInput.dispatchEvent(new Event('change'))

    playSoundsCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        self.enable()
      } else {
        self.disable()
      }
    })
    playSoundsCheckbox.checked = false
    playSoundsCheckbox.dispatchEvent(new Event('change'))
  },
  getContext () {
    return context
  },
  getGainNode () {
    return gainNode
  },
  updateVolume (value) {
    gainNode.gain.setValueAtTime(value, context.currentTime)
  },
  enable () {
    context.resume()
  },
  disable () {
    context.suspend()
  },
  play (sound) {
    sound.play()
    const duration = sound.duration
    if (duration) {
      setTimeout(() => this.stop(sound), duration * 1000)
    }
  },
  stop (sound) {
    sound.stop()
  }
});


/***/ }),

/***/ "../assets/js/service/text-manager.js":
/*!********************************************!*\
  !*** ../assets/js/service/text-manager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function (context, text, color, x, y, width, height, maxLength) {
    maxLength = maxLength === undefined ? text.length : maxLength
    const maxNbLines = Math.floor(height / _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_HEIGHT)
    const lines = this.splitTextIntoLines(text, width)
    let nbDisplayedCharacters = 0
    for (let i = 0; i < lines.length; i++) {
      const centeredLine = this.centerLine(lines[i], width)
      const displayedLine = centeredLine.substring(0, maxLength - nbDisplayedCharacters)
      nbDisplayedCharacters += displayedLine.length
      this.drawLine(context, displayedLine, color, x, y)
      y += _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_HEIGHT
      if ((i + 1) >= maxNbLines) {
        break
      }
    }
  },

  drawLine: function (context, text, color, x, y, maxLength) {
    for (const char of text) {
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite(`${_constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_PREFIX}_${color}_${char.toLowerCase()}`)
      if (sprite) {
        sprite.draw(context, x, y, _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_HEIGHT)
      }
      x += _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_WIDTH
    }
  },

  splitTextIntoLines: function (text, maxWidth) {
    const textPerLine = []
    const nbLettersPerLine = Math.floor(maxWidth / _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_WIDTH)
    let currentLine = ''
    const parts = text.split(' ')
    for (const part of parts) {
      let currentNbLetters = currentLine.length
      if (currentNbLetters > 0) {
        currentNbLetters += 1 // Count space
      }
      if (currentNbLetters + part.length <= nbLettersPerLine) {
        currentLine += currentNbLetters > 0 ? ` ${part}` : `${part}`
      } else {
        textPerLine.push(currentLine)
        currentLine = `${part}`
      }
    }
    if (currentLine.length > 0) {
      textPerLine.push(currentLine)
    }
    return textPerLine
  },

  centerLine: function (text, maxWidth) {
    const nbLettersPerLine = Math.floor(maxWidth / _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_WIDTH)
    const spacesLeft = nbLettersPerLine - text.length
    const nbStartSpaces = Math.ceil(spacesLeft / 2)
    const nEndSpaces = Math.floor(spacesLeft / 2)
    text = text.padStart(text.length + nbStartSpaces, ' ')
    text = text.padEnd(text.length + nEndSpaces, ' ')
    return text
  }
});


/***/ }),

/***/ "../assets/js/service/world-manager.js":
/*!*********************************************!*\
  !*** ../assets/js/service/world-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _model_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/map */ "../assets/js/model/map.js");
/* harmony import */ var _model_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/tile */ "../assets/js/model/tile.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _hitbox_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hitbox-manager */ "../assets/js/service/hitbox-manager.js");
/* harmony import */ var _model_tile_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/tile-transition */ "../assets/js/model/tile-transition.js");
/* harmony import */ var _model_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/extra */ "../assets/js/model/extra.js");
/* harmony import */ var _model_character__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/character */ "../assets/js/model/character.js");


;








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  world: [],
  caverns: [],
  level1: [],
  level2: [],
  level3: [],
  level4: [],
  level5: [],
  level6: [],
  level7: [],
  level8: [],
  level9: [],

  createMaps (data) {
    this.world = this.createMapsForType('world', data.world)
    this.caverns = this.createMapsForType('caverns', data.caverns)
    this.level1 = this.createMapsForType('level1', data.level1)
  },

  createMapsForType (type, mapsData) {
    const maps = []
    for (let i = 0; i < mapsData.length; i++) {
      const mapData = mapsData[i]
      const column = mapData.x
      const line = mapData.y
      const width = _constant__WEBPACK_IMPORTED_MODULE_0__.TILES_PER_LINE * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH
      const height = _constant__WEBPACK_IMPORTED_MODULE_0__.TILES_PER_COLUMN * _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT
      const x = column * width
      const y = line * height
      const tiles = this.createMapTiles(mapData.tiles, x, y)
      if (!maps[column]) {
        maps[column] = []
      }
      const characters = []
      for (const characteraData of mapData.characters) {
        const characterColumn = characteraData.x
        const characterLine = characteraData.y
        const characterWidth = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH
        const characterHeight = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT
        const characterX = x + characterColumn * characterWidth
        const characterY = y + characterLine * characterHeight
        const characterSprite = _resource__WEBPACK_IMPORTED_MODULE_3__["default"].getSprite(characteraData.sprite)
        const characterText = characteraData.text
        characters.push(new _model_character__WEBPACK_IMPORTED_MODULE_7__.Character(characterColumn, characterLine, characterX, characterY, characterWidth, characterHeight, characterSprite, characterText))
      }
      const extras = []
      for (const extraData of mapData.extras) {
        const extraColumn = extraData.x
        const extraLine = extraData.y
        const extraWidth = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH
        const extraHeight = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT
        const extraX = x + extraColumn * extraWidth
        const extraY = y + extraLine * extraHeight
        const extraSprite = _resource__WEBPACK_IMPORTED_MODULE_3__["default"].getSprite(extraData.sprite)
        extras.push(new _model_extra__WEBPACK_IMPORTED_MODULE_6__.Extra(extraColumn, extraLine, extraX, extraY, extraWidth, extraHeight, extraSprite))
      }
      maps[column][line] = new _model_map__WEBPACK_IMPORTED_MODULE_1__.Map(column, line, x, y, width, height, type, tiles, characters, extras)
    }

    return maps
  },

  createMapTiles (tilesData, offsetX, offsetY) {
    const tiles = []
    for (let i = 0; i < tilesData.length; i++) {
      const tileData = tilesData[i]
      const column = tileData.x
      const line = tileData.y
      const width = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_WIDTH
      const height = _constant__WEBPACK_IMPORTED_MODULE_0__.TILE_HEIGHT
      const x = column * width + offsetX
      const y = line * height + offsetY
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_3__["default"].getSprite(tileData.sprite)
      const block = _hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].getHitboxFromString(x, y, width, height, tileData.hitbox)
      const transition = new _model_tile_transition__WEBPACK_IMPORTED_MODULE_5__.TileTransition(tileData.transition?.start, tileData.transition?.targetMapType, tileData.transition?.targetMapColumn, tileData.transition?.targetMapLine, tileData.transition?.targetTileColumn, tileData.transition?.targetTileLine, tileData.transition?.end)
      if (!tiles[column]) {
        tiles[column] = []
      }
      tiles[column][line] = new _model_tile__WEBPACK_IMPORTED_MODULE_2__.Tile(column, line, x, y, width, height, tileData.hitbox, sprite, block, undefined, transition, !!tileData.start)
    }

    return tiles
  },

  getMap (type, column, line) {
    return this[type] && this[type][column] && this[type][column][line] ? this[type][column][line] : undefined
  },

  findStartingPosition () {
    for (const map of this.mapsIterator(_constant__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPE_WORLD)) {
      for (const tile of map.tilesIterator()) {
        if (tile.start) {
          return {
            map,
            tileColumn: tile.column,
            tileLine: tile.line
          }
        }
      }
    }
  },

  * mapsIterator (type) {
    for (let column = 0; column < this[type].length; column++) {
      for (let line = 0; line < this[type][column].length; line++) {
        yield this[type][column][line]
      }
    }
  },

  exportGame () {
    const world = this.exportMaps(_constant__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPE_WORLD)
    const caverns = this.exportMaps(_constant__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPE_CAVERNS)
    const level1 = this.exportMaps(_constant__WEBPACK_IMPORTED_MODULE_0__.MAP_TYPE_LEVEL1)

    return { world, caverns, level1 }
  },

  exportMaps (type) {
    const mapsData = []
    for (const map of this.mapsIterator(type)) {
      const mapData = {
        x: map.column,
        y: map.line,
        tiles: [],
        characters: [],
        extras: []
      }
      for (const character of map.characters) {
        mapData.characters.push({
          x: character.column,
          y: character.line,
          sprite: character.sprite.name,
          text: character.text
        })
      }
      for (const extra of map.extras) {
        mapData.extras.push({
          x: extra.column,
          y: extra.line,
          sprite: extra.sprite.name
        })
      }
      for (const tile of map.tilesIterator()) {
        const tileData = {
          x: tile.column,
          y: tile.line,
          hitbox: tile.hitbox,
          sprite: tile.sprite.name
        }
        if (!tile.tileTransition.isEmpty()) {
          tileData.transition = {
            start: tile.tileTransition.start,
            targetMapType: tile.tileTransition.targetMapType,
            targetMapColumn: tile.tileTransition.targetMapColumn,
            targetMapLine: tile.tileTransition.targetMapLine,
            targetTileColumn: tile.tileTransition.targetTileColumn,
            targetTileLine: tile.tileTransition.targetTileLine,
            end: tile.tileTransition.end
          }
        }
        if (tile.start) {
          tileData.start = true
        }
        mapData.tiles.push(tileData)
      }
      mapsData.push(mapData)
    }
    return mapsData
  }
});


/***/ }),

/***/ "../assets/js/utils/compression.js":
/*!*****************************************!*\
  !*** ../assets/js/utils/compression.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const COMPRESSION_GZIP = 'gzip'

const compression = {
  compress: async function (str) {
    const stream = new Blob([str]).stream()
    const compressedStream = stream.pipeThrough(new CompressionStream(COMPRESSION_GZIP))
    const chunks = []
    for await (const chunk of compressedStream) {
      chunks.push(chunk)
    }
    return await this.concatUint8Arrays(chunks)
  },
  decompress: async function (compressedBytes) {
    const stream = new Blob([compressedBytes]).stream()
    const decompressedStream = stream.pipeThrough(new DecompressionStream(COMPRESSION_GZIP))
    const chunks = []
    for await (const chunk of decompressedStream) {
      chunks.push(chunk)
    }
    const stringBytes = await this.concatUint8Arrays(chunks)
    return new TextDecoder().decode(stringBytes)
  },
  concatUint8Arrays: async function (uint8arrays) {
    const blob = new Blob(uint8arrays)
    const buffer = await blob.arrayBuffer()
    return new Uint8Array(buffer)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compression);


/***/ }),

/***/ "../assets/js/utils/io.js":
/*!********************************!*\
  !*** ../assets/js/utils/io.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compression */ "../assets/js/utils/compression.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  openFile: async function (type) {
    const self = this
    return new Promise((resolve, reject) => {
      const input = document.createElement('input')
      input.type = 'file'
      if (type) {
        input.accept = `.${type}`
      }
      input.style.display = 'none'
      input.addEventListener('cancel', () => {
        input.remove()
      })
      input.addEventListener('change', async () => {
        const files = input.files
        input.remove()
        if (files.length === 1) {
          resolve(await self.readFile(files[0], type))
        } else {
          reject()
        }
      })
      document.body.appendChild(input)
      input.click()
    })
  },
  readFile: async function (file, type) {
    if (!type) {
      type = this.guessTypeFromExtension(file.name)
    }
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = async (e) => {
        let data = e.target.result
        switch (type) {
          case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_LOZ:
            data = new Uint8Array(data)
            data = await _compression__WEBPACK_IMPORTED_MODULE_0__["default"].decompress(data)
            try {
              data = JSON.parse(data)
            } catch (e) {}
            resolve(data)
            break
          case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_JSON:
            resolve(JSON.parse(data))
            break
          case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_PNG:
            const img = await fetch(data)
            const blob = await img.blob()
            resolve(createImageBitmap(blob))
            break
          default:
            reject()
        }
      }
      switch (type) {
        case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_LOZ:
          fileReader.readAsArrayBuffer(file)
          break
        case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_PNG:
          fileReader.readAsDataURL(file)
          break
        case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_JSON:
        default:
          fileReader.readAsText(file)
      }
    })
  },
  dowloadFile: async function (data, type) {
    const filename = prompt('Filename')
    if (!filename) {
      return
    }
    switch (type) {
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_LOZ:
        data = await _compression__WEBPACK_IMPORTED_MODULE_0__["default"].compress(data)
        break
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_JSON:
      default:
                // nothing
    }
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = URL.createObjectURL(new Blob([data]))
    a.download = `${filename.toLowerCase()}.${type}`
    a.textContent = 'Download'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  },
  fetchRemoteFiles: async function (/* Each argument will be loaded */) {
    let paths = Array.prototype.slice.call(arguments)
    if (!Array.isArray(paths)) {
      paths = [paths]
    }
    if (paths.length === 1 && Array.isArray(paths[0])) {
      paths = paths[0]
    }

    const promises = []
    for (let i = 0; i < paths.length; i++) {
      promises.push(this.fetchRemoteFile(paths[i]))
    }

    return Promise.all(promises)
  },
  fetchRemoteFile: async function (path) {
    const extension = path.split('.').pop()
    switch (extension) {
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_JSON:
        return this.fetchJsonFile(path)
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_LOZ:
        return this.fetchLozFile(path)
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_MP3:
        return this.fetchAudioFile(path)
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_PNG:
      case _constant__WEBPACK_IMPORTED_MODULE_1__.FILE_TYPE_WEBP:
        return this.fetchImageFile(path)
      default:
        throw new Error(`IO: extension not allowed for file ${path}`)
    }
  },
  fetchLozFile: async (path) => {
    let data = await fetch(path)
    data = await data.arrayBuffer()
    data = new Uint8Array(data)
    data = await _compression__WEBPACK_IMPORTED_MODULE_0__["default"].decompress(data)
    try {
      data = JSON.parse(data)
    } catch (e) {}
    return data
  },
  fetchJsonFile: async (path) => {
    let data = await fetch(path)
    data = await data.json()
    return data
  },
  fetchImageFile: async (path) => {
    let data = await fetch(path)
    data = await data.blob()
    data = createImageBitmap(data)
    return data
  },
  fetchAudioFile: async (path) => {
    let data = await fetch(path)
    data = await data.arrayBuffer()
    return data
  },
  guessTypeFromExtension: (filename) => {
    return filename.split('.').at(-1)
  }
});


/***/ }),

/***/ "../node_modules/interactjs/dist/interact.min.js":
/*!*******************************************************!*\
  !*** ../node_modules/interactjs/dist/interact.min.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/* interact.js 1.10.27 | https://raw.github.com/taye/interact.js/main/LICENSE */

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}(this,n)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},f.apply(this,arguments)}function d(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}var h=function(t){return!(!t||!t.Window)&&t instanceof t.Window},v=void 0,g=void 0;function m(t){v=t;var e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),g=t}function y(t){return h(t)?t:(t.ownerDocument||t).defaultView||g.window}"undefined"!=typeof window&&window&&m(window);var b=function(t){return!!t&&"object"===n(t)},x=function(t){return"function"==typeof t},w={window:function(t){return t===g||h(t)},docFrag:function(t){return b(t)&&11===t.nodeType},object:b,func:x,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==n(t))return!1;var e=y(t)||g;return/object|function/.test("undefined"==typeof Element?"undefined":n(Element))?t instanceof Element||t instanceof e.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return b(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return b(t)&&void 0!==t.length&&x(t.splice)}};function E(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function T(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var i="x"===r?"y":"x";e.page[i]=n.coords.start.page[i],e.client[i]=n.coords.start.client[i],e.delta[i]=0}}}var S={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=S.draggable,e.map.drag=S,e.methodDict.drag="draggable",r.actions.drag=S.defaults},listeners:{"interactions:before-action-move":E,"interactions:action-resume":E,"interactions:action-move":T,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,i=n.options.drag;if(i&&i.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===i.lockAxis?i.startAxis:i.lockAxis},!1}},draggable:function(t){return w.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):w.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:E,move:T,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(t){return 0===t.search("drag")}},_=S,P={init:function(t){var e=t;P.document=e.document,P.DocumentFragment=e.DocumentFragment||O,P.SVGElement=e.SVGElement||O,P.SVGSVGElement=e.SVGSVGElement||O,P.SVGElementInstance=e.SVGElementInstance||O,P.Element=e.Element||O,P.HTMLElement=e.HTMLElement||P.Element,P.Event=e.Event,P.Touch=e.Touch||O,P.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function O(){}var k=P;var D={init:function(t){var e=k.Element,n=t.navigator||{};D.supportsTouch="ontouchstart"in t||w.func(t.DocumentTouch)&&k.document instanceof t.DocumentTouch,D.supportsPointerEvent=!1!==n.pointerEnabled&&!!k.PointerEvent,D.isIOS=/iP(hone|od|ad)/.test(n.platform),D.isIOS7=/iP(hone|od|ad)/.test(n.platform)&&/OS 7[^\d]/.test(n.appVersion),D.isIe9=/MSIE 9/.test(n.userAgent),D.isOperaMobile="Opera"===n.appName&&D.supportsTouch&&/Presto/.test(n.userAgent),D.prefixedMatchesSelector="matches"in e.prototype?"matches":"webkitMatchesSelector"in e.prototype?"webkitMatchesSelector":"mozMatchesSelector"in e.prototype?"mozMatchesSelector":"oMatchesSelector"in e.prototype?"oMatchesSelector":"msMatchesSelector",D.pEventTypes=D.supportsPointerEvent?k.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,D.wheelEvent=k.document&&"onmousewheel"in k.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var I=D;function M(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function z(t,e){for(;w.element(t);){if(R(t,e))return t;t=A(t)}return null}function A(t){var e=t.parentNode;if(w.docFrag(e)){for(;(e=e.host)&&w.docFrag(e););return e}return e}function R(t,e){return g!==v&&(e=e.replace(/\/deep\//g," ")),t[I.prefixedMatchesSelector](e)}var C=function(t){return t.parentNode||t.host};function j(t,e){for(var n,r=[],i=t;(n=C(i))&&i!==e&&n!==i.ownerDocument;)r.unshift(i),i=n;return r}function F(t,e,n){for(;w.element(t);){if(R(t,e))return!0;if((t=A(t))===n)return R(t,e)}return!1}function X(t){return t.correspondingUseElement||t}function Y(t){var e=t instanceof k.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}function L(t){var e,n=Y(t);if(!I.isIOS7&&n){var r={x:(e=(e=y(t))||g).scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop};n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n}function q(t){for(var e=[];t;)e.push(t),t=A(t);return e}function B(t){return!!w.string(t)&&(k.document.querySelector(t),!0)}function V(t,e){for(var n in e)t[n]=e[n];return t}function W(t,e,n){return"parent"===t?A(n):"self"===t?e.getRect(n):z(n,t)}function G(t,e,n,r){var i=t;return w.string(i)?i=W(i,e,n):w.func(i)&&(i=i.apply(void 0,r)),w.element(i)&&(i=L(i)),i}function N(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}}function U(t){return!t||"x"in t&&"y"in t||((t=V({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y),t}function H(t,e,n){t.left&&(e.left+=n.x),t.right&&(e.right+=n.x),t.top&&(e.top+=n.y),t.bottom&&(e.bottom+=n.y),e.width=e.right-e.left,e.height=e.bottom-e.top}function K(t,e,n){var r=n&&t.options[n];return N(G(r&&r.origin||t.options.origin,t,e,[t&&e]))||{x:0,y:0}}function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return!0},r=arguments.length>3?arguments[3]:void 0;if(r=r||{},w.string(t)&&-1!==t.search(" ")&&(t=J(t)),w.array(t))return t.forEach((function(t){return $(t,e,n,r)})),r;if(w.object(t)&&(e=t,t=""),w.func(e)&&n(t))r[t]=r[t]||[],r[t].push(e);else if(w.array(e))for(var i=0,o=e;i<o.length;i++){var a=o[i];$(t,a,n,r)}else if(w.object(e))for(var s in e){$(J(s).map((function(e){return"".concat(t).concat(e)})),e[s],n,r)}return r}function J(t){return t.trim().split(/ +/)}var Q=function(t,e){return Math.sqrt(t*t+e*e)},Z=["webkit","moz"];function tt(t,e){t.__set||(t.__set={});var n=function(n){if(Z.some((function(t){return 0===n.indexOf(t)})))return 1;"function"!=typeof t[n]&&"__set"!==n&&Object.defineProperty(t,n,{get:function(){return n in t.__set?t.__set[n]:t.__set[n]=e[n]},set:function(e){t.__set[n]=e},configurable:!0})};for(var r in e)n(r);return t}function et(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp}function nt(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0}function rt(t){return t instanceof k.Event||t instanceof k.Touch}function it(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function ot(t,e){return e=e||{x:0,y:0},I.isOperaMobile&&rt(t)?(it("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):it("page",t,e),e}function at(t){return w.number(t.pointerId)?t.pointerId:t.identifier}function st(t,e,n){var r=e.length>1?lt(e):e[0];ot(r,t.page),function(t,e){e=e||{},I.isOperaMobile&&rt(t)?it("screen",t,e):it("client",t,e)}(r,t.client),t.timeStamp=n}function ct(t){var e=[];return w.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function lt(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var i in e)e[i]+=r[i]}for(var o in e)e[o]/=t.length;return e}function ut(t){if(!t.length)return null;var e=ct(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),i=Math.max(e[0].pageX,e[1].pageX),o=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:i,bottom:o,width:i-n,height:o-r}}function pt(t,e){var n=e+"X",r=e+"Y",i=ct(t),o=i[0][n]-i[1][n],a=i[0][r]-i[1][r];return Q(o,a)}function ft(t,e){var n=e+"X",r=e+"Y",i=ct(t),o=i[1][n]-i[0][n],a=i[1][r]-i[0][r];return 180*Math.atan2(a,o)/Math.PI}function dt(t){return w.string(t.pointerType)?t.pointerType:w.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type||"")||t instanceof k.Touch?"touch":"mouse"}function ht(t){var e=w.func(t.composedPath)?t.composedPath():t.path;return[X(e?e[0]:t.target),X(t.currentTarget)]}var vt=function(){function t(e){r(this,t),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}return o(t,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),t}();Object.defineProperty(vt.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var gt=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t},mt=function(t){return gt([],t)},yt=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1},bt=function(t,e){return t[yt(t,e)]},xt=function(t){s(n,t);var e=p(n);function n(t,i,o){var a;r(this,n),(a=e.call(this,i._interaction)).dropzone=void 0,a.dragEvent=void 0,a.relatedTarget=void 0,a.draggable=void 0,a.propagationStopped=!1,a.immediatePropagationStopped=!1;var s="dragleave"===o?t.prev:t.cur,c=s.element,l=s.dropzone;return a.type=o,a.target=c,a.currentTarget=c,a.dropzone=l,a.dragEvent=i,a.relatedTarget=i.target,a.draggable=i.interactable,a.timeStamp=i.timeStamp,a}return o(n,[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var r=e.activeDrops,i=yt(r,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(i,1);var o=new n(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new n(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),n}(vt);function wt(t,e){for(var n=0,r=t.slice();n<r.length;n++){var i=r[n],o=i.dropzone,a=i.element;e.dropzone=o,e.target=a,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function Et(t,e){for(var n=function(t,e){for(var n=[],r=0,i=t.interactables.list;r<i.length;r++){var o=i[r];if(o.options.drop.enabled){var a=o.options.drop.accept;if(!(w.element(a)&&a!==e||w.string(a)&&!R(e,a)||w.func(a)&&!a({dropzone:o,draggableElement:e})))for(var s=0,c=o.getAllElements();s<c.length;s++){var l=c[s];l!==e&&n.push({dropzone:o,element:l,rect:o.getRect(l)})}}}return n}(t,e),r=0;r<n.length;r++){var i=n[r];i.rect=i.dropzone.getRect(i.element)}return n}function Tt(t,e,n){for(var r=t.dropState,i=t.interactable,o=t.element,a=[],s=0,c=r.activeDrops;s<c.length;s++){var l=c[s],u=l.dropzone,p=l.element,f=l.rect,d=u.dropCheck(e,n,i,o,p,f);a.push(d?p:null)}var h=function(t){for(var e,n,r,i=[],o=0;o<t.length;o++){var a=t[o],s=t[e];if(a&&o!==e)if(s){var c=C(a),l=C(s);if(c!==a.ownerDocument)if(l!==a.ownerDocument)if(c!==l){i=i.length?i:j(s);var u=void 0;if(s instanceof k.HTMLElement&&a instanceof k.SVGElement&&!(a instanceof k.SVGSVGElement)){if(a===l)continue;u=a.ownerSVGElement}else u=a;for(var p=j(u,s.ownerDocument),f=0;p[f]&&p[f]===i[f];)f++;var d=[p[f-1],p[f],i[f]];if(d[0])for(var h=d[0].lastChild;h;){if(h===d[1]){e=o,i=p;break}if(h===d[2])break;h=h.previousSibling}}else r=s,void 0,void 0,(parseInt(y(n=a).getComputedStyle(n).zIndex,10)||0)>=(parseInt(y(r).getComputedStyle(r).zIndex,10)||0)&&(e=o);else e=o}else e=o}return e}(a);return r.activeDrops[h]||null}function St(t,e,n){var r=t.dropState,i={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(i.activate=new xt(r,n,"dropactivate"),i.activate.target=null,i.activate.dropzone=null),"dragend"===n.type&&(i.deactivate=new xt(r,n,"dropdeactivate"),i.deactivate.target=null,i.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(i.leave=new xt(r,n,"dragleave"),n.dragLeave=i.leave.target=r.prev.element,n.prevDropzone=i.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(i.enter=new xt(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(i.drop=new xt(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(i.move=new xt(r,n,"dropmove"),n.dropzone=r.cur.dropzone)),i}function _t(t,e){var n=t.dropState,r=n.activeDrops,i=n.cur,o=n.prev;e.leave&&o.dropzone.fire(e.leave),e.enter&&i.dropzone.fire(e.enter),e.move&&i.dropzone.fire(e.move),e.drop&&i.dropzone.fire(e.drop),e.deactivate&&wt(r,e.deactivate),n.prev.dropzone=i.dropzone,n.prev.element=i.element}function Pt(t,e){var n=t.interaction,r=t.iEvent,i=t.event;if("dragmove"===r.type||"dragend"===r.type){var o=n.dropState;e.dynamicDrop&&(o.activeDrops=Et(e,n.element));var a=r,s=Tt(n,a,i);o.rejected=o.rejected&&!!s&&s.dropzone===o.cur.dropzone&&s.element===o.cur.element,o.cur.dropzone=s&&s.dropzone,o.cur.element=s&&s.element,o.events=St(n,0,a)}}var Ot={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,i=t.defaults;t.usePlugin(_),r.prototype.dropzone=function(t){return function(t,e){if(w.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=$(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{}),i=t.options.drop.listeners;i&&t.off(i),t.on(r),t.options.drop.listeners=r}return w.func(e.ondrop)&&t.on("drop",e.ondrop),w.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),w.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),w.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),w.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),w.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:w.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(w.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,i,o){return function(t,e,n,r,i,o,a){var s=!1;if(!(a=a||t.getRect(o)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,s,t,o,r,i);var c=t.options.drop.overlap;if("pointer"===c){var l=K(r,i,"drag"),u=ot(e);u.x+=l.x,u.y+=l.y;var p=u.x>a.left&&u.x<a.right,f=u.y>a.top&&u.y<a.bottom;s=p&&f}var d=r.getRect(i);if(d&&"center"===c){var h=d.left+d.width/2,v=d.top+d.height/2;s=h>=a.left&&h<=a.right&&v>=a.top&&v<=a.bottom}if(d&&w.number(c)){s=Math.max(0,Math.min(a.right,d.right)-Math.max(a.left,d.left))*Math.max(0,Math.min(a.bottom,d.bottom)-Math.max(a.top,d.top))/(d.width*d.height)>=c}t.options.drop.checker&&(s=t.options.drop.checker(e,n,s,t,o,r,i));return s}(this,t,e,n,r,i,o)},n.dynamicDrop=function(e){return w.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},V(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,i.actions.drop=Ot.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var i=n.dropState;i.activeDrops=[],i.events={},i.activeDrops=Et(e,n.element),i.events=St(n,0,r),i.events.activate&&(wt(i.activeDrops,i.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":Pt,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;if("drag"===n.prepared.name){var i=n.dropState;_t(n,i.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),i.events={}}},"interactions:action-end":function(t,e){if("drag"===t.interaction.prepared.name){var n=t.interaction,r=t.iEvent;Pt(t,e),_t(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r})}},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:Et,getDrop:Tt,getDropEvents:St,fireDropEvents:_t,filterEventType:function(t){return 0===t.search("drag")||0===t.search("drop")},defaults:{enabled:!1,accept:null,overlap:"pointer"}},kt=Ot;function Dt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var i=e.pointers.map((function(t){return t.pointer})),o="start"===r,a="end"===r,s=e.interactable.options.deltaSource;if(n.touches=[i[0],i[1]],o)n.distance=pt(i,s),n.box=ut(i),n.scale=1,n.ds=0,n.angle=ft(i,s),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(a||e.pointers.length<2){var c=e.prevEvent;n.distance=c.distance,n.box=c.box,n.scale=c.scale,n.ds=0,n.angle=c.angle,n.da=0}else n.distance=pt(i,s),n.box=ut(i),n.scale=n.distance/e.gesture.startDistance,n.angle=ft(i,s),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,w.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}var It={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return w.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):w.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=It,e.methodDict.gesture="gesturable",r.actions.gesture=It.defaults},listeners:{"interactions:action-start":Dt,"interactions:action-move":Dt,"interactions:action-end":Dt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(t){return 0===t.search("gesture")}},Mt=It;function zt(t,e,n,r,i,o,a){if(!e)return!1;if(!0===e){var s=w.number(o.width)?o.width:o.right-o.left,c=w.number(o.height)?o.height:o.bottom-o.top;if(a=Math.min(a,Math.abs(("left"===t||"right"===t?s:c)/2)),s<0&&("left"===t?t="right":"right"===t&&(t="left")),c<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t){var l=s>=0?o.left:o.right;return n.x<l+a}if("top"===t){var u=c>=0?o.top:o.bottom;return n.y<u+a}if("right"===t)return n.x>(s>=0?o.right:o.left)-a;if("bottom"===t)return n.y>(c>=0?o.bottom:o.top)-a}return!!w.element(r)&&(w.element(e)?e===r:F(r,e,i))}function At(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}var Rt,Ct,jt={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,i=t.defaults;jt.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),jt.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(w.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),w.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),w.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:w.bool(e.square)&&(t.options.resize.square=e.square),t;if(w.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=jt,e.methodDict.resize="resizable",i.actions.resize=jt.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,i=n.rect;n._rects={start:V({},i),corrected:V({},i),previous:V({},i),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),At(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,i=n.interactable.options.resize.invert,o="reposition"===i||"negate"===i,a=n.rect,s=n._rects,c=s.start,l=s.corrected,u=s.delta,p=s.previous;if(V(p,l),o){if(V(l,a),"reposition"===i){if(l.top>l.bottom){var f=l.top;l.top=l.bottom,l.bottom=f}if(l.left>l.right){var d=l.left;l.left=l.right,l.right=d}}}else l.top=Math.min(a.top,c.bottom),l.bottom=Math.max(a.bottom,c.top),l.left=Math.min(a.left,c.right),l.right=Math.max(a.right,c.left);for(var h in l.width=l.right-l.left,l.height=l.bottom-l.top,l)u[h]=l[h]-p[h];r.edges=n.prepared.edges,r.rect=l,r.deltaRect=u}}(t),At(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,i=t.rect,o=t.buttons;if(i){var a=V({},e.coords.cur.page),s=n.options.resize;if(s&&s.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(o&s.mouseButtons))){if(w.object(s.edges)){var c={left:!1,right:!1,top:!1,bottom:!1};for(var l in c)c[l]=zt(l,s.edges[l],a,e._latestPointer.eventTarget,r,i,s.margin||jt.defaultMargin);c.left=c.left&&!c.right,c.top=c.top&&!c.bottom,(c.left||c.right||c.top||c.bottom)&&(t.action={name:"resize",edges:c})}else{var u="y"!==s.axis&&a.x>i.right-jt.defaultMargin,p="x"!==s.axis&&a.y>i.bottom-jt.defaultMargin;(u||p)&&(t.action={name:"resize",axes:(u?"x":"")+(p?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,i=jt.cursors,o=null;if(n)o=i[r+n];else if(e){for(var a="",s=0,c=["top","bottom","left","right"];s<c.length;s++){var l=c[s];e[l]&&(a+=l)}o=i[a]}return o},filterEventType:function(t){return 0===t.search("resize")},defaultMargin:null},Ft=jt,Xt={id:"actions",install:function(t){t.usePlugin(Mt),t.usePlugin(Ft),t.usePlugin(_),t.usePlugin(kt)}},Yt=0;var Lt={request:function(t){return Rt(t)},cancel:function(t){return Ct(t)},init:function(t){if(Rt=t.requestAnimationFrame,Ct=t.cancelAnimationFrame,!Rt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];Rt=t["".concat(r,"RequestAnimationFrame")],Ct=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}Rt=Rt&&Rt.bind(t),Ct=Ct&&Ct.bind(t),Rt||(Rt=function(e){var n=Date.now(),r=Math.max(0,16-(n-Yt)),i=t.setTimeout((function(){e(n+r)}),r);return Yt=n+r,i},Ct=function(t){return clearTimeout(t)})}};var qt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){qt.isScrolling=!0,Lt.cancel(qt.i),t.autoScroll=qt,qt.interaction=t,qt.prevTime=qt.now(),qt.i=Lt.request(qt.scroll)},stop:function(){qt.isScrolling=!1,qt.interaction&&(qt.interaction.autoScroll=null),Lt.cancel(qt.i)},scroll:function(){var t=qt.interaction,e=t.interactable,n=t.element,r=t.prepared.name,i=e.options[r].autoScroll,o=Bt(i.container,e,n),a=qt.now(),s=(a-qt.prevTime)/1e3,c=i.speed*s;if(c>=1){var l={x:qt.x*c,y:qt.y*c};if(l.x||l.y){var u=Vt(o);w.window(o)?o.scrollBy(l.x,l.y):o&&(o.scrollLeft+=l.x,o.scrollTop+=l.y);var p=Vt(o),f={x:p.x-u.x,y:p.y-u.y};(f.x||f.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:f,interaction:t,container:o})}qt.prevTime=a}qt.isScrolling&&(Lt.cancel(qt.i),qt.i=Lt.request(qt.scroll))},check:function(t,e){var n;return null==(n=t.options[e].autoScroll)?void 0:n.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&qt.check(e.interactable,e.prepared.name))if(e.simulation)qt.x=qt.y=0;else{var r,i,o,a,s=e.interactable,c=e.element,l=e.prepared.name,u=s.options[l].autoScroll,p=Bt(u.container,s,c);if(w.window(p))a=n.clientX<qt.margin,r=n.clientY<qt.margin,i=n.clientX>p.innerWidth-qt.margin,o=n.clientY>p.innerHeight-qt.margin;else{var f=Y(p);a=n.clientX<f.left+qt.margin,r=n.clientY<f.top+qt.margin,i=n.clientX>f.right-qt.margin,o=n.clientY>f.bottom-qt.margin}qt.x=i?1:a?-1:0,qt.y=o?1:r?-1:0,qt.isScrolling||(qt.margin=u.margin,qt.speed=u.speed,qt.start(e))}}};function Bt(t,e,n){return(w.string(t)?W(t,e,n):t)||y(n)}function Vt(t){return w.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Wt={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=qt,qt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=qt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,qt.stop(),qt.interaction&&(qt.interaction=null)},"interactions:stop":qt.stop,"interactions:action-move":function(t){return qt.onInteractionMove(t)}}},Gt=Wt;function Nt(t,e){var n=!1;return function(){return n||(g.console.warn(e),n=!0),t.apply(this,arguments)}}function Ut(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t}function Ht(t){return w.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Kt(t){return w.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}var $t={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,i){var o=function(t,e,n,r,i){var o=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:o,buttons:a};return i.fire("auto-start:check",s),s.action}(this,n,r,i,t);return this.options.actionChecker?this.options.actionChecker(e,n,o,this,i,r):o},e.prototype.ignoreFrom=Nt((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=Nt((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Kt,e.prototype.styleCursor=Ht}};function Jt(t,e,n,r,i){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&ee(e,n,t,i)?t:null}function Qt(t,e,n,r,i,o,a){for(var s=0,c=r.length;s<c;s++){var l=r[s],u=i[s],p=l.getAction(e,n,t,u);if(p){var f=Jt(p,l,u,o,a);if(f)return{action:f,interactable:l,element:u}}}return{action:null,interactable:null,element:null}}function Zt(t,e,n,r,i){var o=[],a=[],s=r;function c(t){o.push(t),a.push(s)}for(;w.element(s);){o=[],a=[],i.interactables.forEachMatch(s,c);var l=Qt(t,e,n,o,a,r,i);if(l.action&&!l.interactable.options[l.action.name].manualStart)return l;s=A(s)}return{action:null,interactable:null,element:null}}function te(t,e,n){var r=e.action,i=e.interactable,o=e.element;r=r||{name:null},t.interactable=i,t.element=o,Ut(t.prepared,r),t.rect=i&&r.name?i.getRect(o):null,ie(t,n),n.fire("autoStart:prepared",{interaction:t})}function ee(t,e,n,r){var i=t.options,o=i[n.name].max,a=i[n.name].maxPerElement,s=r.autoStart.maxInteractions,c=0,l=0,u=0;if(!(o&&a&&s))return!1;for(var p=0,f=r.interactions.list;p<f.length;p++){var d=f[p],h=d.prepared.name;if(d.interacting()){if(++c>=s)return!1;if(d.interactable===t){if((l+=h===n.name?1:0)>=o)return!1;if(d.element===e&&(u++,h===n.name&&u>=a))return!1}}}return s>0}function ne(t,e){return w.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function re(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function ie(t,e){var n=t.interactable,r=t.element,i=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var o="";if(i.name){var a=n.options[i.name].cursorChecker;o=w.func(a)?a(i,n,r,t._interacting):e.actions.map[i.name].getCursor(i)}re(t.element,o||"",e)}else e.autoStart.cursorElement&&re(e.autoStart.cursorElement,"",e)}var oe={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin($t),n.base.actionChecker=null,n.base.styleCursor=!0,V(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return ne(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:ee,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;n.interacting()||te(n,Zt(n,r,i,o,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||te(n,Zt(n,r,i,o,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,i=n.prepared.name;i&&r&&(r.options[i].manualStart||!ee(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),ie(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&re(n.element,"",e)}},maxInteractions:ne,withinInteractionLimit:ee,validateAction:Jt},ae=oe;var se={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,i=t.dx,o=t.dy;if("drag"===n.prepared.name){var a=Math.abs(i),s=Math.abs(o),c=n.interactable.options.drag,l=c.startAxis,u=a>s?"x":a<s?"y":"xy";if(n.prepared.axis="start"===c.lockAxis?u[0]:c.lockAxis,"xy"!==u&&"xy"!==l&&l!==u){n.prepared.name=null;for(var p=r,f=function(t){if(t!==n.interactable){var i=n.interactable.options.drag;if(!i.manualStart&&t.testIgnoreAllow(i,p,r)){var o=t.getAction(n.downPointer,n.downEvent,n,p);if(o&&"drag"===o.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(u,t)&&ae.validateAction(o,t,p,r,e))return t}}};w.element(p);){var d=e.interactables.forEachMatch(p,f);if(d){n.prepared.name="drag",n.interactable=d,n.element=p;break}p=A(p)}}}}}};function ce(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}var le={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(ae),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=ce(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.autoStartHoldTimer&&e.pointerWasMoved&&!n&&(clearTimeout(e.autoStartHoldTimer),e.autoStartHoldTimer=null)},"autoStart:before-start":function(t){var e=t.interaction;ce(e)>0&&(e.prepared.name=null)}},getHoldDuration:ce},ue=le,pe={id:"auto-start",install:function(t){t.usePlugin(ae),t.usePlugin(ue),t.usePlugin(se)}},fe=function(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):w.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault};function de(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}var he={id:"core/interactablePreventDefault",install:function(t){var e=t.Interactable;e.prototype.preventDefault=fe,e.prototype.checkAndPreventDefault=function(e){return function(t,e,n){var r=t.options.preventDefault;if("never"!==r)if("always"!==r){if(e.events.supportsPassive&&/^touch(start|move)$/.test(n.type)){var i=y(n.target).document,o=e.getDocOptions(i);if(!o||!o.events||!1!==o.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(n.type)||w.element(n.target)&&R(n.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||n.preventDefault()}else n.preventDefault()}(this,t,e)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0,r=t.interactions.list;n<r.length;n++){var i=r[n];if(i.element&&(i.element===e.target||M(i.element,e.target)))return void i.interactable.checkAndPreventDefault(e)}}})},listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=de,t}),{})};function ve(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1}function ge(t){var e={};for(var n in t){var r=t[n];w.plainObject(r)?e[n]=ge(r):w.array(r)?e[n]=mt(r):e[n]=r}return e}var me=function(){function t(e){r(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=ye(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return o(t,[{key:"start",value:function(t,e){var n,r,i=t.phase,o=this.interaction,a=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;if(n&&n.length)return n;return["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(o);this.prepareStates(a),this.startEdges=V({},o.edges),this.edges=V({},this.startEdges),this.startOffset=(n=o.rect,r=e,n?{left:r.x-n.left,top:r.y-n.top,right:n.right-r.x,bottom:n.bottom-r.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var s=this.fillArg({phase:i,pageCoords:e,preEnd:!1});return this.result=ye(),this.startAll(s),this.result=this.setAll(s)}},{key:"fillArg",value:function(t){var e=this.interaction;return t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect||(t.rect=e.rect),t.edges||(t.edges=this.startEdges),t.startOffset=this.startOffset,t}},{key:"startAll",value:function(t){for(var e=0,n=this.states;e<n.length;e++){var r=n[e];r.methods.start&&(t.state=r,r.methods.start(t))}}},{key:"setAll",value:function(t){var e=t.phase,n=t.preEnd,r=t.skipModifiers,i=t.rect,o=t.edges;t.coords=V({},t.pageCoords),t.rect=V({},i),t.edges=V({},o);for(var a=r?this.states.slice(r):this.states,s=ye(t.coords,t.rect),c=0;c<a.length;c++){var l,u=a[c],p=u.options,f=V({},t.coords),d=null;null!=(l=u.methods)&&l.set&&this.shouldDo(p,n,e)&&(t.state=u,d=u.methods.set(t),H(t.edges,t.rect,{x:t.coords.x-f.x,y:t.coords.y-f.y})),s.eventProps.push(d)}V(this.edges,t.edges),s.delta.x=t.coords.x-t.pageCoords.x,s.delta.y=t.coords.y-t.pageCoords.y,s.rectDelta.left=t.rect.left-i.left,s.rectDelta.right=t.rect.right-i.right,s.rectDelta.top=t.rect.top-i.top,s.rectDelta.bottom=t.rect.bottom-i.bottom;var h=this.result.coords,v=this.result.rect;if(h&&v){var g=s.rect.left!==v.left||s.rect.right!==v.right||s.rect.top!==v.top||s.rect.bottom!==v.bottom;s.changed=g||h.x!==s.coords.x||h.y!==s.coords.y}return s}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,i=e.coords.start,o=this.result,a=this.startDelta,s=o.delta;"start"===n&&V(this.startDelta,o.delta);for(var c=0,l=[[i,a],[r,s]];c<l.length;c++){var u=l[c],p=u[0],f=u[1];p.page.x+=f.x,p.page.y+=f.y,p.client.x+=f.x,p.client.y+=f.y}var d=this.result.rectDelta,h=t.rect||e.rect;h.left+=d.left,h.right+=d.right,h.top+=d.top,h.bottom+=d.bottom,h.width=h.right-h.left,h.height=h.bottom-h.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,i=t.skipModifiers,o=this.setAll(this.fillArg({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page}));if(this.result=o,!o.changed&&(!i||i<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};o.coords.x+=s.x,o.coords.y+=s.y,o.delta.x+=s.x,o.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var i=!1,o=0;o<r.length;o++){var a=r[o];t.state=a;var s=a.options,c=a.methods,l=c.beforeEnd&&c.beforeEnd(t);if(l)return this.endResult=l,!1;i=i||!i&&this.shouldDo(s,!0,t.phase,!0)}i&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=V({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0,i=this.states;r<i.length;r++){var o=i[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,i=n.methods,o=n.name;this.states.push({options:r,methods:i,index:e,name:o})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,i=e.modification;if(i.result){for(var o=i.startDelta,a=i.result,s=a.delta,c=a.rectDelta,l=0,u=[[n.start,o],[n.cur,s]];l<u.length;l++){var p=u[l],f=p[0],d=p[1];f.page.x-=d.x,f.page.y-=d.y,f.client.x-=d.x,f.client.y-=d.y}r.left-=c.left,r.right-=c.right,r.top-=c.top,r.bottom-=c.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.startEdges=t.startEdges,this.edges=t.edges,this.states=t.states.map((function(t){return ge(t)})),this.result=ye(V({},t.result.coords),V({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}]),t}();function ye(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function be(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},i=function(t){var i=t||{};for(var o in i.enabled=!1!==i.enabled,n)o in i||(i[o]=n[o]);var a={options:i,methods:r,name:e,enable:function(){return i.enabled=!0,a},disable:function(){return i.enabled=!1,a}};return a};return e&&"string"==typeof e&&(i._defaults=n,i._methods=r),i}function xe(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}var we={id:"modifiers/base",before:["actions"],install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new me(e)},"interactions:before-action-start":function(t){var e=t.interaction,n=t.interaction.modification;n.start(t,e.coords.start.page),e.edges=n.edges,n.applyToInteraction(t)},"interactions:before-action-move":function(t){var e=t.interaction,n=e.modification,r=n.setAndApply(t);return e.edges=n.edges,r},"interactions:before-action-end":function(t){var e=t.interaction,n=e.modification,r=n.beforeEnd(t);return e.edges=n.startEdges,r},"interactions:action-start":xe,"interactions:action-move":xe,"interactions:action-end":xe,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}}},Ee=we,Te={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},Se=function(t){s(n,t);var e=p(n);function n(t,i,o,a,s,c,l){var p;r(this,n),(p=e.call(this,t)).relatedTarget=null,p.screenX=void 0,p.screenY=void 0,p.button=void 0,p.buttons=void 0,p.ctrlKey=void 0,p.shiftKey=void 0,p.altKey=void 0,p.metaKey=void 0,p.page=void 0,p.client=void 0,p.delta=void 0,p.rect=void 0,p.x0=void 0,p.y0=void 0,p.t0=void 0,p.dt=void 0,p.duration=void 0,p.clientX0=void 0,p.clientY0=void 0,p.velocity=void 0,p.speed=void 0,p.swipe=void 0,p.axes=void 0,p.preEnd=void 0,s=s||t.element;var f=t.interactable,d=(f&&f.options||Te).deltaSource,h=K(f,s,o),v="start"===a,g="end"===a,m=v?u(p):t.prevEvent,y=v?t.coords.start:g?{page:m.page,client:m.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return p.page=V({},y.page),p.client=V({},y.client),p.rect=V({},t.rect),p.timeStamp=y.timeStamp,g||(p.page.x-=h.x,p.page.y-=h.y,p.client.x-=h.x,p.client.y-=h.y),p.ctrlKey=i.ctrlKey,p.altKey=i.altKey,p.shiftKey=i.shiftKey,p.metaKey=i.metaKey,p.button=i.button,p.buttons=i.buttons,p.target=s,p.currentTarget=s,p.preEnd=c,p.type=l||o+(a||""),p.interactable=f,p.t0=v?t.pointers[t.pointers.length-1].downTime:m.t0,p.x0=t.coords.start.page.x-h.x,p.y0=t.coords.start.page.y-h.y,p.clientX0=t.coords.start.client.x-h.x,p.clientY0=t.coords.start.client.y-h.y,p.delta=v||g?{x:0,y:0}:{x:p[d].x-m[d].x,y:p[d].y-m[d].y},p.dt=t.coords.delta.timeStamp,p.duration=p.timeStamp-p.t0,p.velocity=V({},t.coords.velocity[d]),p.speed=Q(p.velocity.x,p.velocity.y),p.swipe=g||"inertiastart"===a?p.getSwipe():null,p}return o(n,[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),n}(vt);Object.defineProperties(Se.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var _e=o((function t(e,n,i,o,a){r(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=i,this.downTime=o,this.downTarget=a})),Pe=function(t){return t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy="",t}({}),Oe=function(t){return t.start="",t.move="",t.end="",t.stop="",t.interacting="",t}({}),ke=0,De=function(){function t(e){var n=this,i=e.pointerType,o=e.scopeFire;r(this,t),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=Nt((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=ke++,this._scopeFire=o,this.pointerType=i;var a=this;this._proxy={};var s=function(t){Object.defineProperty(n._proxy,t,{get:function(){return a[t]}})};for(var c in Pe)s(c);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return a[t].apply(a,arguments)}})};for(var u in Oe)l(u);this._scopeFire("interactions:new",{interaction:this})}return o(t,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),i=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:i,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&(Ut(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?V({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,i,o=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,i=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=Q(r,i)>this.pointerMoveTolerance);var a,s,c,l=this.getPointerIndex(t),u={pointer:t,pointerIndex:l,pointerInfo:this.pointers[l],event:e,type:"move",eventTarget:n,dx:r,dy:i,duplicate:o,interaction:this};o||(a=this.coords.velocity,s=this.coords.delta,c=Math.max(s.timeStamp/1e3,.001),a.page.x=s.page.x/c,a.page.y=s.page.y/c,a.client.x=s.client.x/c,a.client.y=s.client.y/c,a.timeStamp=c),this._scopeFire("interactions:move",u),o||this.simulation||(this.interacting()&&(u.type=null,this.move(u)),this.pointerWasMoved&&et(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||nt(this.coords.delta),(t=V({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var i=this.getPointerIndex(t);-1===i&&(i=this.updatePointer(t,e,n,!1));var o=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(o),{pointer:t,pointerIndex:i,pointerInfo:this.pointers[i],event:e,eventTarget:n,type:o,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=at(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:yt(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var i,o,a,s=at(t),c=this.getPointerIndex(t),l=this.pointers[c];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),l?l.pointer=t:(l=new _e(s,t,e,null,null),c=this.pointers.length,this.pointers.push(l)),st(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),i=this.coords.delta,o=this.coords.prev,a=this.coords.cur,i.page.x=a.page.x-o.page.x,i.page.y=a.page.y-o.page.y,i.client.x=a.client.x-o.client.x,i.client.y=a.client.y-o.client.y,i.timeStamp=a.timeStamp-o.timeStamp,r&&(this.pointerIsDown=!0,l.downTime=this.coords.cur.timeStamp,l.downTarget=n,tt(this.downPointer,t),this.interacting()||(et(this.coords.start,this.coords.cur),et(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:l,pointerIndex:c,interaction:this}),c}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new Se(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){var e;null==(e=this.interactable)||e.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,i=t.type,o=this.rect;if(o&&"move"===n&&(H(this.edges,o,this.coords.delta[this.interactable.options.deltaSource]),o.width=o.right-o.left,o.height=o.bottom-o.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,i);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();function Ie(t){Me(t.interaction)}function Me(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return Ae(t.coords.cur,e),Ae(t.coords.delta,e),H(t.edges,t.rect,e),e.x=0,e.y=0,!0}function ze(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function Ae(t,e){var n=t.page,r=t.client,i=e.x,o=e.y;n.x+=i,n.y+=o,r.x+=i,r.y+=o}Oe.offsetBy="";var Re={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(t){t.Interaction.prototype.offsetBy=ze},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return function(t){t.pointerIsDown&&(Ae(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}(t.interaction)},"interactions:before-action-start":Ie,"interactions:before-action-move":Ie,"interactions:before-action-end":function(t){var e=t.interaction;if(Me(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}},Ce=Re;var je=function(){function t(e){r(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=e}return o(t,[{key:"start",value:function(t){var e=this.interaction,n=Fe(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,i=Q(r.x,r.y),o=this.modification||(this.modification=new me(e));if(o.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=i,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg=o.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-e.coords.cur.timeStamp<50&&i>n.minSpeed&&i>n.endSpeed)this.startInertia();else{if(o.result=o.setAll(this.modifierArg),!o.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=Fe(this.interaction),r=n.resistance,i=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-i)/r,y:(e.y-i)/r},this.te=i,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var o=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},o.result=o.setAll(a),o.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+o.result.delta.x,y:this.targetOffset.y+o.result.delta.y}),this.onNextFrame((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return t.smoothEndTick()}))}},{key:"onNextFrame",value:function(t){var e=this;this.timeout=Lt.request((function(){e.active&&t()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,i,o,a,s=this,c=this.interaction,l=Fe(c).resistance,u=(c._now()-this.t0)/1e3;if(u<this.te){var p,f=1-(Math.exp(-l*u)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,i=this.modifiedOffset.x,o=this.modifiedOffset.y,p={x:Ye(a=f,t,n,i),y:Ye(a,e,r,o)}):p={x:this.targetOffset.x*f,y:this.targetOffset.y*f};var d={x:p.x-this.currentOffset.x,y:p.y-this.currentOffset.y};this.currentOffset.x+=d.x,this.currentOffset.y+=d.y,c.offsetBy(d),c.move(),this.onNextFrame((function(){return s.inertiaTick()}))}else c.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=Fe(e).smoothEndDuration;if(n<r){var i={x:Le(n,0,this.targetOffset.x,r),y:Le(n,0,this.targetOffset.y,r)},o={x:i.x-this.currentOffset.x,y:i.y-this.currentOffset.y};this.currentOffset.x+=o.x,this.currentOffset.y+=o.y,e.offsetBy(o),e.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,i=this.interaction;i.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),i.updatePointer(e,n,r,!0),i._doPhase({interaction:i,event:n,phase:"resume"}),et(i.coords.prev,i.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Lt.cancel(this.timeout)}}]),t}();function Fe(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}var Xe={id:"inertia",before:["modifiers","actions"],install:function(t){var e=t.defaults;t.usePlugin(Ce),t.usePlugin(Ee),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new je(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var i=n;w.element(i);){if(i===e.element){r.resume(t);break}i=A(i)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":xe,"interactions:action-inertiastart":xe,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};function Ye(t,e,n,r){var i=1-t;return i*i*e+2*i*t*n+t*t*r}function Le(t,e,n,r){return-n*(t/=r)*(t-2)+e}var qe=Xe;function Be(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}var Ve=function(){function t(e){r(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=V({},e||{})}return o(t,[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&Be(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&Be(t,e)}},{key:"on",value:function(t,e){var n=$(t,e);for(t in n)this.types[t]=gt(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=$(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var i=0,o=n[t];i<o.length;i++){var a=o[i],s=r.indexOf(a);-1!==s&&r.splice(s,1)}}}},{key:"getRect",value:function(t){return null}}]),t}();var We=function(){function t(e){r(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=e,tt(this,e)}return o(t,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),t}();function Ge(t){return w.object(t)?{capture:!!t.capture,passive:!!t.passive}:{capture:!!t,passive:!1}}function Ne(t,e){return t===e||("boolean"==typeof t?!!e.capture===t&&!1==!!e.passive:!!t.capture==!!e.capture&&!!t.passive==!!e.passive)}var Ue={id:"events",install:function(t){var e,n=[],r={},i=[],o={add:a,remove:s,addDelegate:function(t,e,n,o,s){var u=Ge(s);if(!r[n]){r[n]=[];for(var p=0;p<i.length;p++){var f=i[p];a(f,n,c),a(f,n,l,!0)}}var d=r[n],h=bt(d,(function(n){return n.selector===t&&n.context===e}));h||(h={selector:t,context:e,listeners:[]},d.push(h));h.listeners.push({func:o,options:u})},removeDelegate:function(t,e,n,i,o){var a,u=Ge(o),p=r[n],f=!1;if(!p)return;for(a=p.length-1;a>=0;a--){var d=p[a];if(d.selector===t&&d.context===e){for(var h=d.listeners,v=h.length-1;v>=0;v--){var g=h[v];if(g.func===i&&Ne(g.options,u)){h.splice(v,1),h.length||(p.splice(a,1),s(e,n,c),s(e,n,l,!0)),f=!0;break}}if(f)break}}},delegateListener:c,delegateUseCapture:l,delegatedEvents:r,documents:i,targets:n,supportsOptions:!1,supportsPassive:!1};function a(t,e,r,i){if(t.addEventListener){var a=Ge(i),s=bt(n,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},n.push(s)),s.events[e]||(s.events[e]=[]),bt(s.events[e],(function(t){return t.func===r&&Ne(t.options,a)}))||(t.addEventListener(e,r,o.supportsOptions?a:a.capture),s.events[e].push({func:r,options:a}))}}function s(t,e,r,i){if(t.addEventListener&&t.removeEventListener){var a=yt(n,(function(e){return e.eventTarget===t})),c=n[a];if(c&&c.events)if("all"!==e){var l=!1,u=c.events[e];if(u){if("all"===r){for(var p=u.length-1;p>=0;p--){var f=u[p];s(t,e,f.func,f.options)}return}for(var d=Ge(i),h=0;h<u.length;h++){var v=u[h];if(v.func===r&&Ne(v.options,d)){t.removeEventListener(e,r,o.supportsOptions?d:d.capture),u.splice(h,1),0===u.length&&(delete c.events[e],l=!0);break}}}l&&!Object.keys(c.events).length&&n.splice(a,1)}else for(e in c.events)c.events.hasOwnProperty(e)&&s(t,e,"all")}}function c(t,e){for(var n=Ge(e),i=new We(t),o=r[t.type],a=ht(t)[0],s=a;w.element(s);){for(var c=0;c<o.length;c++){var l=o[c],u=l.selector,p=l.context;if(R(s,u)&&M(p,a)&&M(p,s)){var f=l.listeners;i.currentTarget=s;for(var d=0;d<f.length;d++){var h=f[d];Ne(h.options,n)&&h.func(i)}}}s=A(s)}}function l(t){return c(t,!0)}return null==(e=t.document)||e.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}},He={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0,n=He.methodOrder;e<n.length;e++){var r=n[e],i=He[r](t);if(i)return i}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,i=t.scope;if(!/down|start/i.test(n))return null;for(var o=0,a=i.interactions.list;o<a.length;o++){var s=a[o],c=r;if(s.simulation&&s.simulation.allowResume&&s.pointerType===e)for(;c;){if(c===s.element)return s;c=A(c)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,i=t.eventType,o=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0,s=o.interactions.list;a<s.length;a++){var c=s[a];if(c.pointerType===r){if(c.simulation&&!Ke(c,n))continue;if(c.interacting())return c;e||(e=c)}}if(e)return e;for(var l=0,u=o.interactions.list;l<u.length;l++){var p=u[l];if(!(p.pointerType!==r||/down/i.test(i)&&p.simulation))return p}return null},hasPointer:function(t){for(var e=t.pointerId,n=0,r=t.scope.interactions.list;n<r.length;n++){var i=r[n];if(Ke(i,e))return i}return null},idle:function(t){for(var e=t.pointerType,n=0,r=t.scope.interactions.list;n<r.length;n++){var i=r[n];if(1===i.pointers.length){var o=i.interactable;if(o&&(!o.options.gesture||!o.options.gesture.enabled))continue}else if(i.pointers.length>=2)continue;if(!i.interacting()&&e===i.pointerType)return i}return null}};function Ke(t,e){return t.pointers.some((function(t){return t.id===e}))}var $e=He,Je=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Qe(t,e){return function(n){var r=e.interactions.list,i=dt(n),o=ht(n),a=o[0],s=o[1],c=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var l=0,u=n.changedTouches;l<u.length;l++){var p=u[l],f={pointer:p,pointerId:at(p),pointerType:i,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=Ze(f);c.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var h=!1;if(!I.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!h;v++)h="mouse"!==r[v].pointerType&&r[v].pointerIsDown;h=h||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!h){var g={pointer:n,pointerId:at(n),pointerType:i,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},m=Ze(g);c.push([g.pointer,g.eventTarget,g.curEventTarget,m])}}for(var y=0;y<c.length;y++){var b=c[y],x=b[0],w=b[1],E=b[2];b[3][t](x,n,w,E)}}}function Ze(t){var e=t.pointerType,n=t.scope,r={interaction:$e.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function tn(t,e){var n=t.doc,r=t.scope,i=t.options,o=r.interactions.docEvents,a=r.events,s=a[e];for(var c in r.browser.isIOS&&!i.events&&(i.events={passive:!1}),a.delegatedEvents)s(n,c,a.delegateListener),s(n,c,a.delegateUseCapture,!0);for(var l=i&&i.events,u=0;u<o.length;u++){var p=o[u];s(n,p.type,p.listener,l)}}var en={id:"core/interactions",install:function(t){for(var e={},n=0;n<Je.length;n++){var i=Je[n];e[i]=Qe(i,t)}var a,c=I.pEventTypes;function l(){for(var e=0,n=t.interactions.list;e<n.length;e++){var r=n[e];if(r.pointerIsDown&&"touch"===r.pointerType&&!r._interacting)for(var i=function(){var e=a[o];t.documents.some((function(t){return M(t.doc,e.downTarget)}))||r.removePointer(e.pointer,e.event)},o=0,a=r.pointers;o<a.length;o++)i()}}(a=k.PointerEvent?[{type:c.down,listener:l},{type:c.down,listener:e.pointerDown},{type:c.move,listener:e.pointerMove},{type:c.up,listener:e.pointerUp},{type:c.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:l},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0,r=t.interactions.list;n<r.length;n++){r[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){s(i,e);var n=p(i);function i(){return r(this,i),n.apply(this,arguments)}return o(i,[{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}},{key:"_now",value:function(){return t.now()}}]),i}(De),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:a,pointerMoveTolerance:1},t.usePlugin(he)},listeners:{"scope:add-document":function(t){return tn(t,"add")},"scope:remove-document":function(t){return tn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var i=e.interactions.list[r];i.interactable===n&&(i.stop(),e.fire("interactions:destroy",{interaction:i}),i.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:tn,doOnInteractions:Qe,methodNames:Je},nn=en,rn=function(t){return t[t.On=0]="On",t[t.Off=1]="Off",t}(rn||{}),on=function(){function t(e,n,i,o){r(this,t),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Ve,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=n.actions,this.target=e,this._context=n.context||i,this._win=y(B(e)?this._context:e),this._doc=this._win.document,this._scopeEvents=o,this.set(n)}return o(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(t,e){return w.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),w.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),w.func(e.onend)&&this.on("".concat(t,"end"),e.onend),w.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){var r,i=this,o=null==(r=this._actions.map[t])?void 0:r.filterEventType,a=function(t){return(null==o||o(t))&&ve(t,i._actions)};(w.array(e)||w.object(e))&&this._onOff(rn.Off,t,e,void 0,a),(w.array(n)||w.object(n))&&this._onOff(rn.On,t,n,void 0,a)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var i=r,o=this.options[t],a=e[i];"listeners"===i&&this.updatePerActionListeners(t,o.listeners,a),w.array(a)?o[i]=mt(a):w.plainObject(a)?(o[i]=V(o[i]||{},ge(a)),w.object(n.perAction[i])&&"enabled"in n.perAction[i]&&(o[i].enabled=!1!==a.enabled)):w.bool(a)&&w.object(n.perAction[i])?o[i].enabled=a:o[i]=a}}},{key:"getRect",value:function(t){return t=t||(w.element(this.target)?this.target:null),w.string(this.target)&&(t=t||this._context.querySelector(this.target)),L(t)}},{key:"rectChecker",value:function(t){var e=this;return w.func(t)?(this.getRect=function(n){var r=V({},t.apply(e,n));return"width"in r||(r.width=r.right-r.left,r.height=r.bottom-r.top),r},this):null===t?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if(B(e)||w.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var t=this.target;return w.string(t)?Array.from(this._context.querySelectorAll(t)):w.func(t)&&t.getAllElements?t.getAllElements():w.element(t)?[t]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||M(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!w.element(n)&&(w.string(t)?F(n,t,e):!!w.element(t)&&M(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!w.element(n))&&(w.string(t)?F(n,t,e):!!w.element(t)&&M(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r,i){w.object(e)&&!w.array(e)&&(r=n,n=null);var o=$(e,n,i);for(var a in o){"wheel"===a&&(a=I.wheelEvent);for(var s=0,c=o[a];s<c.length;s++){var l=c[s];ve(a,this._actions)?this.events[t===rn.On?"on":"off"](a,l):w.string(this.target)?this._scopeEvents[t===rn.On?"addDelegate":"removeDelegate"](this.target,this._context,a,l,r):this._scopeEvents[t===rn.On?"add":"remove"](this.target,a,l,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff(rn.On,t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff(rn.Off,t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in w.object(t)||(t={}),this.options=ge(e.base),this._actions.methodDict){var r=n,i=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,V(V({},e.perAction),e.actions[r])),this[i](t[r])}for(var o in t)"getRect"!==o?w.func(this[o])&&this[o](t[o]):this.rectChecker(t.getRect);return this}},{key:"unset",value:function(){if(w.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],i=r.selector,o=r.context,a=r.listeners;i===this.target&&o===this._context&&e.splice(n,1);for(var s=a.length-1;s>=0;s--)this._scopeEvents.removeDelegate(this.target,this._context,t,a[s][0],a[s][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}(),an=function(){function t(e){var n=this;r(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,i=w.string(r)?n.selectorMap[r]:r[n.scope.id],o=yt(i,(function(t){return t===e}));i.splice(o,1)}})}return o(t,[{key:"new",value:function(t,e){e=V(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events);return this.scope.addDocument(n._doc),this.list.push(n),w.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(n)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(n)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"getExisting",value:function(t,e){var n=e&&e.context||this.scope.document,r=w.string(t),i=r?this.selectorMap[t]:t[this.scope.id];if(i)return bt(i,(function(e){return e._context===n&&(r||e.inContext(t))}))}},{key:"forEachMatch",value:function(t,e){for(var n=0,r=this.list;n<r.length;n++){var i=r[n],o=void 0;if((w.string(i.target)?w.element(t)&&R(t,i.target):t===i.target)&&i.inContext(t)&&(o=e(i)),void 0!==o)return o}}}]),t}();var sn=function(){function t(){var e=this;r(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=I,this.defaults=ge(Te),this.Eventable=Ve,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(t){var e=function e(n,r){var i=t.interactables.getExisting(n,r);return i||((i=t.interactables.new(n,r)).events.global=e.globalEvents),i};return e.getPointerAverage=lt,e.getTouchBBox=ut,e.getTouchDistance=pt,e.getTouchAngle=ft,e.getElementRect=L,e.getElementClientRect=Y,e.matchesSelector=R,e.closest=z,e.globalEvents={},e.version="1.10.27",e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=Nt((function(t,e,n){if(w.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),w.array(t)){for(var r=0,i=t;r<i.length;r++){var o=i[r];this.on(o,e,n)}return this}if(w.object(t)){for(var a in t)this.on(a,t[a],e);return this}return ve(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this}),"The interact.on() method is being deprecated"),e.off=Nt((function(t,e,n){if(w.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),w.array(t)){for(var r=0,i=t;r<i.length;r++){var o=i[r];this.off(o,e,n)}return this}if(w.object(t)){for(var a in t)this.off(a,t[a],e);return this}var s;return ve(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n),this}),"The interact.off() method is being deprecated"),e.debug=function(){return this.scope},e.supportsTouch=function(){return I.supportsTouch},e.supportsPointerEvent=function(){return I.supportsPointerEvent},e.stop=function(){for(var t=0,e=this.scope.interactions.list;t<e.length;t++)e[t].stop();return this},e.pointerMoveTolerance=function(t){return w.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e}(this),this.InteractEvent=Se,this.Interactable=void 0,this.interactables=new an(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){s(i,t);var e=p(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"_defaults",get:function(){return n.defaults}},{key:"set",value:function(t){return f(c(i.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){f(c(i.prototype),"unset",this).call(this);var t=n.interactables.list.indexOf(this);t<0||(n.interactables.list.splice(t,1),n.fire("interactable:unset",{interactable:this}))}}]),i}(on)}return o(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0,r=this.listenerMaps;n<r.length;n++){var i=r[n].map[t];if(i&&!1===i(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:function(t,e){t.isInitialized=!0,w.window(e)&&m(e);return k.init(e),I.init(e),Lt.init(e),t.window=e,t.document=e.document,t.usePlugin(nn),t.usePlugin(Ue),t}(this,t)}},{key:"pluginIsInstalled",value:function(t){var e=t.id;return e?!!this._plugins.map[e]:-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,i=t.before.reduce((function(t,e){return t[e]=!0,t[cn(e)]=!0,t}),{});n<r;n++){var o=this.listenerMaps[n].id;if(o&&(i[o]||i[cn(o)]))break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,e){if(-1!==this.getDocIndex(t))return!1;var n=y(t);e=e?V({},e):{},this.documents.push({doc:t,options:e}),this.events.documents.push(t),t!==this.document&&this.events.add(n,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:n,scope:this,options:e})}},{key:"removeDocument",value:function(t){var e=this.getDocIndex(t),n=y(t),r=this.documents[e].options;this.events.remove(n,"unload",this.onWindowUnload),this.documents.splice(e,1),this.events.documents.splice(e,1),this.fire("scope:remove-document",{doc:t,window:n,scope:this,options:r})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function cn(t){return t&&t.replace(/\/.*$/,"")}var ln=new sn,un=ln.interactStatic,pn="undefined"!=typeof globalThis?globalThis:window;ln.init(pn);var fn=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=e[0],r=e[1];return n in t||r in t})),n=function(n,r){for(var i=t.range,o=t.limits,a=void 0===o?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:o,s=t.offset,c=void 0===s?{x:0,y:0}:s,l={range:i,grid:t,x:null,y:null},u=0;u<e.length;u++){var p=e[u],f=p[0],d=p[1],h=Math.round((n-c.x)/t[f]),v=Math.round((r-c.y)/t[d]);l[f]=Math.max(a.left,Math.min(a.right,h*t[f]+c.x)),l[d]=Math.max(a.top,Math.min(a.bottom,v*t[d]+c.y))}return l};return n.grid=t,n.coordFields=e,n}}),dn={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=V(e.snappers||{},fn),e.createSnapGrid=e.snappers.grid}},hn=dn,vn={start:function(t){var n=t.state,r=t.rect,i=t.edges,o=t.pageCoords,a=n.options,s=a.ratio,c=a.enabled,l=n.options,u=l.equalDelta,p=l.modifiers;"preserve"===s&&(s=r.width/r.height),n.startCoords=V({},o),n.startRect=V({},r),n.ratio=s,n.equalDelta=u;var f=n.linkedEdges={top:i.top||i.left&&!i.bottom,left:i.left||i.top&&!i.right,bottom:i.bottom||i.right&&!i.top,right:i.right||i.bottom&&!i.left};if(n.xIsPrimaryAxis=!(!i.left&&!i.right),n.equalDelta){var d=(f.left?1:-1)*(f.top?1:-1);n.edgeSign={x:d,y:d}}else n.edgeSign={x:f.left?-1:1,y:f.top?-1:1};if(!1!==c&&V(i,f),null!=p&&p.length){var h=new me(t.interaction);h.copyFrom(t.interaction.modification),h.prepareStates(p),n.subModification=h,h.startAll(e({},t))}},set:function(t){var n=t.state,r=t.rect,i=t.coords,o=n.linkedEdges,a=V({},i),s=n.equalDelta?gn:mn;if(V(t.edges,o),s(n,n.xIsPrimaryAxis,i,r),!n.subModification)return null;var c=V({},r);H(o,c,{x:i.x-a.x,y:i.y-a.y});var l=n.subModification.setAll(e(e({},t),{},{rect:c,edges:o,pageCoords:i,prevCoords:i,prevRect:c})),u=l.delta;l.changed&&(s(n,Math.abs(u.x)>Math.abs(u.y),l.coords,l.rect),V(i,l.coords));return l.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function gn(t,e,n){var r=t.startCoords,i=t.edgeSign;e?n.y=r.y+(n.x-r.x)*i.y:n.x=r.x+(n.y-r.y)*i.x}function mn(t,e,n,r){var i=t.startRect,o=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var c=r.width/a;n.y=o.y+(c-i.height)*s.y}else{var l=r.height*a;n.x=o.x+(l-i.width)*s.x}}var yn=be(vn,"aspectRatio"),bn=function(){};bn._defaults={};var xn=bn;function wn(t,e,n){return w.func(t)?G(t,e.interactable,e.element,[n.x,n.y,e]):G(t,e.interactable,e.element)}var En={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,i=t.interaction,o=t.pageCoords,a=r.options,s=a.elementRect,c=V({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var l=wn(a.restriction,i,o);if(l){var u=l.right-l.left-e.width,p=l.bottom-l.top-e.height;u<0&&(c.left+=u,c.right+=u),p<0&&(c.top+=p,c.bottom+=p)}c.left+=n.left-e.width*s.left,c.top+=n.top-e.height*s.top,c.right+=n.right-e.width*(1-s.right),c.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=c},set:function(t){var e=t.coords,n=t.interaction,r=t.state,i=r.options,o=r.offset,a=wn(i.restriction,n,e);if(a){var s=function(t){return!t||"left"in t&&"top"in t||((t=V({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height),t}(a);e.x=Math.max(Math.min(s.right-o.right,e.x),s.left+o.left),e.y=Math.max(Math.min(s.bottom-o.bottom,e.y),s.top+o.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},Tn=be(En,"restrict"),Sn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},_n={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Pn(t,e){for(var n=0,r=["top","left","bottom","right"];n<r.length;n++){var i=r[n];i in t||(t[i]=e[i])}return t}var On={noInner:Sn,noOuter:_n,start:function(t){var e,n=t.interaction,r=t.startOffset,i=t.state,o=i.options;o&&(e=N(wn(o.offset,n,n.coords.start.page))),e=e||{x:0,y:0},i.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,i=t.state,o=i.offset,a=i.options;if(n){var s=V({},e),c=wn(a.inner,r,s)||{},l=wn(a.outer,r,s)||{};Pn(c,Sn),Pn(l,_n),n.top?e.y=Math.min(Math.max(l.top+o.top,s.y),c.top+o.top):n.bottom&&(e.y=Math.max(Math.min(l.bottom+o.bottom,s.y),c.bottom+o.bottom)),n.left?e.x=Math.min(Math.max(l.left+o.left,s.x),c.left+o.left):n.right&&(e.x=Math.max(Math.min(l.right+o.right,s.x),c.right+o.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},kn=be(On,"restrictEdges"),Dn=V({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},En.defaults),In=be({start:En.start,set:En.set,defaults:Dn},"restrictRect"),Mn={width:-1/0,height:-1/0},zn={width:1/0,height:1/0};var An=be({start:function(t){return On.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,i=t.edges,o=n.options;if(i){var a=U(wn(o.min,e,t.coords))||Mn,s=U(wn(o.max,e,t.coords))||zn;n.options={endOnly:o.endOnly,inner:V({},On.noInner),outer:V({},On.noOuter)},i.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):i.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),i.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):i.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),On.set(t),n.options=o}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize");var Rn={start:function(t){var e,n=t.interaction,r=t.interactable,i=t.element,o=t.rect,a=t.state,s=t.startOffset,c=a.options,l=c.offsetWithOrigin?function(t){var e=t.interaction.element,n=N(G(t.state.options.origin,null,null,[e])),r=n||K(t.interactable,e,t.interaction.prepared.name);return r}(t):{x:0,y:0};if("startCoords"===c.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var u=G(c.offset,r,i,[n]);(e=N(u)||{x:0,y:0}).x+=l.x,e.y+=l.y}var p=c.relativePoints;a.offsets=o&&p&&p.length?p.map((function(t,n){return{index:n,relativePoint:t,x:s.left-o.width*t.x+e.x,y:s.top-o.height*t.y+e.y}})):[{index:0,relativePoint:null,x:e.x,y:e.y}]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,i=r.options,o=r.offsets,a=K(e.interactable,e.element,e.prepared.name),s=V({},n),c=[];i.offsetWithOrigin||(s.x-=a.x,s.y-=a.y);for(var l=0,u=o;l<u.length;l++)for(var p=u[l],f=s.x-p.x,d=s.y-p.y,h=0,v=i.targets.length;h<v;h++){var g=i.targets[h],m=void 0;(m=w.func(g)?g(f,d,e._proxy,p,h):g)&&c.push({x:(w.number(m.x)?m.x:f)+p.x,y:(w.number(m.y)?m.y:d)+p.y,range:w.number(m.range)?m.range:i.range,source:g,index:h,offset:p})}for(var y={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<c.length;b++){var x=c[b],E=x.range,T=x.x-s.x,S=x.y-s.y,_=Q(T,S),P=_<=E;E===1/0&&y.inRange&&y.range!==1/0&&(P=!1),y.target&&!(P?y.inRange&&E!==1/0?_/E<y.distance/y.range:E===1/0&&y.range!==1/0||_<y.distance:!y.inRange&&_<y.distance)||(y.target=x,y.distance=_,y.range=E,y.inRange=P,y.delta.x=T,y.delta.y=S)}return y.inRange&&(n.x=y.target.x,n.y=y.target.y),r.closest=y,y},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},Cn=be(Rn,"snap");var jn={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],Rn.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,i=n.options,o=n.offsets,a={x:r.x-o[0].x,y:r.y-o[0].y};n.options=V({},i),n.options.targets=[];for(var s=0,c=i.targets||[];s<c.length;s++){var l=c[s],u=void 0;if(u=w.func(l)?l(a.x,a.y,e):l){for(var p=0,f=n.targetFields;p<f.length;p++){var d=f[p],h=d[0],v=d[1];if(h in u||v in u){u.x=u[h],u.y=u[v];break}}n.options.targets.push(u)}}var g=Rn.set(t);return n.options=i,g},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},Fn=be(jn,"snapSize");var Xn={aspectRatio:yn,restrictEdges:kn,restrict:Tn,restrictRect:In,restrictSize:An,snapEdges:be({start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],jn.start(t)):null},set:jn.set,defaults:V(ge(jn.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:Cn,snapSize:Fn,spring:xn,avoid:xn,transform:xn,rubberband:xn},Yn={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(Ee),t.usePlugin(hn),e.modifiers=Xn,Xn){var r=Xn[n],i=r._defaults,o=r._methods;i._methods=o,t.defaults.perAction[n]=i}}},Ln=Yn,qn=function(t){s(n,t);var e=p(n);function n(t,i,o,a,s,c){var l;if(r(this,n),tt(u(l=e.call(this,s)),o),o!==i&&tt(u(l),i),l.timeStamp=c,l.originalEvent=o,l.type=t,l.pointerId=at(i),l.pointerType=dt(i),l.target=a,l.currentTarget=null,"tap"===t){var p=s.getPointerIndex(i);l.dt=l.timeStamp-s.pointers[p].downTime;var f=l.timeStamp-s.tapTime;l.double=!!s.prevTap&&"doubletap"!==s.prevTap.type&&s.prevTap.target===l.target&&f<500}else"doubletap"===t&&(l.dt=i.timeStamp-s.tapTime,l.double=!0);return l}return o(n,[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),n}(vt),Bn={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Bn,t.defaults.actions.pointerEvents=Bn.defaults,V(t.actions.phaselessTypes,Bn.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;t.duplicate||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&Gn(t),Vn({interaction:n,pointer:r,event:i,eventTarget:o,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,c=q(o),l={interaction:n,pointer:r,event:i,eventTarget:o,type:"hold",targets:[],path:c,node:null},u=0;u<c.length;u++){var p=c[u];l.node=p,e.fire("pointerEvents:collect-targets",l)}if(!l.targets.length)return;for(var f=1/0,d=0,h=l.targets;d<h.length;d++){var v=h[d].eventable.options.holdDuration;v<f&&(f=v)}s.duration=f,s.timeout=setTimeout((function(){Vn({interaction:n,eventTarget:o,pointer:r,event:i,type:"hold"},e)}),f)}(t,e),Vn(t,e)},"interactions:up":function(t,e){Gn(t),Vn(t,e),function(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget;n.pointerWasMoved||Vn({interaction:n,eventTarget:o,pointer:r,event:i,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){Gn(t),Vn(t,e)}},PointerEvent:qn,fire:Vn,collectEventTargets:Wn,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Vn(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.type,s=t.targets,c=void 0===s?Wn(t,e):s,l=new qn(a,r,i,o,n,e.now());e.fire("pointerEvents:new",{pointerEvent:l});for(var u={interaction:n,pointer:r,event:i,eventTarget:o,targets:c,type:a,pointerEvent:l},p=0;p<c.length;p++){var f=c[p];for(var d in f.props||{})l[d]=f.props[d];var h=K(f.eventable,f.node);if(l._subtractOrigin(h),l.eventable=f.eventable,l.currentTarget=f.node,f.eventable.fire(l),l._addOrigin(h),l.immediatePropagationStopped||l.propagationStopped&&p+1<c.length&&c[p+1].node!==l.currentTarget)break}if(e.fire("pointerEvents:fired",u),"tap"===a){var v=l.double?Vn({interaction:n,pointer:r,event:i,eventTarget:o,type:"doubletap"},e):l;n.prevTap=v,n.tapTime=v.timeStamp}return l}function Wn(t,e){var n=t.interaction,r=t.pointer,i=t.event,o=t.eventTarget,a=t.type,s=n.getPointerIndex(r),c=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!c||c.downTarget!==o))return[];for(var l=q(o),u={interaction:n,pointer:r,event:i,eventTarget:o,type:a,path:l,targets:[],node:null},p=0;p<l.length;p++){var f=l[p];u.node=f,e.fire("pointerEvents:collect-targets",u)}return"hold"===a&&(u.targets=u.targets.filter((function(t){var e,r;return t.eventable.options.holdDuration===(null==(e=n.pointers[s])||null==(r=e.hold)?void 0:r.duration)}))),u.targets}function Gn(t){var e=t.interaction,n=t.pointerIndex,r=e.pointers[n].hold;r&&r.timeout&&(clearTimeout(r.timeout),r.timeout=null)}var Nn=Object.freeze({__proto__:null,default:Bn});function Un(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}var Hn={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Bn);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Un,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,i=t.eventTarget,o=t.targets;if("hold"===r.type&&o.length){var a=o[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:i,type:"hold",pointer:r,event:r},e)}),a))}}})},Kn=Hn;var $n={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=function(t){return V(this.events.options,t),this};var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,i=t.type,o=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[i]&&e.types[i].length&&t.testIgnoreAllow(a,r,o)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;V(n.events.options,e.pointerEvents.defaults),V(n.events.options,r.pointerEvents||{})}}},Jn=$n,Qn={id:"pointer-events",install:function(t){t.usePlugin(Nn),t.usePlugin(Kn),t.usePlugin(Jn)}},Zn=Qn;var tr={id:"reflow",install:function(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=t.getAllElements(),i=n.window.Promise,o=i?[]:null,a=function(){var a=r[s],c=t.getRect(a);if(!c)return 1;var l,u=bt(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===a&&n.prepared.name===e.name}));if(u)u.move(),o&&(l=u._reflowPromise||new i((function(t){u._reflowResolve=t})));else{var p=U(c),f=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}}({page:{x:p.x,y:p.y},client:{x:p.x,y:p.y},timeStamp:n.now()});l=function(t,e,n,r,i){var o=t.interactions.new({pointerType:"reflow"}),a={interaction:o,event:i,pointer:i,eventTarget:n,phase:"reflow"};o.interactable=e,o.element=n,o.prevEvent=i,o.updatePointer(i,i,n,!0),nt(o.coords.delta),Ut(o.prepared,r),o._doPhase(a);var s=t.window,c=s.Promise,l=c?new c((function(t){o._reflowResolve=t})):void 0;o._reflowPromise=l,o.start(r,e,n),o._interacting?(o.move(a),o.end(i)):(o.stop(),o._reflowResolve());return o.removePointer(i,i),l}(n,t,a,e,f)}o&&o.push(l)},s=0;s<r.length&&!a();s++);return o&&i.all(o).then((function(){return t}))}(this,e,t)}},listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),function(t,e){t.splice(t.indexOf(e),1)}(e.interactions.list,n))}}},er=tr;if(un.use(he),un.use(Ce),un.use(Zn),un.use(qe),un.use(Ln),un.use(pe),un.use(Xt),un.use(Gt),un.use(er),un.default=un,"object"===( false?0:n(module))&&module)try{module.exports=un}catch(t){}return un.default=un,un}));
//# sourceMappingURL=interact.min.js.map


/***/ }),

/***/ "../node_modules/polybooljs/index.js":
/*!*******************************************!*\
  !*** ../node_modules/polybooljs/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * @copyright 2016 Sean Connelly (@voidqk), http://syntheti.cc
 * @license MIT
 * @preserve Project Home: https://github.com/voidqk/polybooljs
 */

var BuildLog = __webpack_require__(/*! ./lib/build-log */ "../node_modules/polybooljs/lib/build-log.js");
var Epsilon = __webpack_require__(/*! ./lib/epsilon */ "../node_modules/polybooljs/lib/epsilon.js");
var Intersecter = __webpack_require__(/*! ./lib/intersecter */ "../node_modules/polybooljs/lib/intersecter.js");
var SegmentChainer = __webpack_require__(/*! ./lib/segment-chainer */ "../node_modules/polybooljs/lib/segment-chainer.js");
var SegmentSelector = __webpack_require__(/*! ./lib/segment-selector */ "../node_modules/polybooljs/lib/segment-selector.js");
var GeoJSON = __webpack_require__(/*! ./lib/geojson */ "../node_modules/polybooljs/lib/geojson.js");

var buildLog = false;
var epsilon = Epsilon();

var PolyBool;
PolyBool = {
	// getter/setter for buildLog
	buildLog: function(bl){
		if (bl === true)
			buildLog = BuildLog();
		else if (bl === false)
			buildLog = false;
		return buildLog === false ? false : buildLog.list;
	},
	// getter/setter for epsilon
	epsilon: function(v){
		return epsilon.epsilon(v);
	},

	// core API
	segments: function(poly){
		var i = Intersecter(true, epsilon, buildLog);
		poly.regions.forEach(i.addRegion);
		return {
			segments: i.calculate(poly.inverted),
			inverted: poly.inverted
		};
	},
	combine: function(segments1, segments2){
		var i3 = Intersecter(false, epsilon, buildLog);
		return {
			combined: i3.calculate(
				segments1.segments, segments1.inverted,
				segments2.segments, segments2.inverted
			),
			inverted1: segments1.inverted,
			inverted2: segments2.inverted
		};
	},
	selectUnion: function(combined){
		return {
			segments: SegmentSelector.union(combined.combined, buildLog),
			inverted: combined.inverted1 || combined.inverted2
		}
	},
	selectIntersect: function(combined){
		return {
			segments: SegmentSelector.intersect(combined.combined, buildLog),
			inverted: combined.inverted1 && combined.inverted2
		}
	},
	selectDifference: function(combined){
		return {
			segments: SegmentSelector.difference(combined.combined, buildLog),
			inverted: combined.inverted1 && !combined.inverted2
		}
	},
	selectDifferenceRev: function(combined){
		return {
			segments: SegmentSelector.differenceRev(combined.combined, buildLog),
			inverted: !combined.inverted1 && combined.inverted2
		}
	},
	selectXor: function(combined){
		return {
			segments: SegmentSelector.xor(combined.combined, buildLog),
			inverted: combined.inverted1 !== combined.inverted2
		}
	},
	polygon: function(segments){
		return {
			regions: SegmentChainer(segments.segments, epsilon, buildLog),
			inverted: segments.inverted
		};
	},

	// GeoJSON converters
	polygonFromGeoJSON: function(geojson){
		return GeoJSON.toPolygon(PolyBool, geojson);
	},
	polygonToGeoJSON: function(poly){
		return GeoJSON.fromPolygon(PolyBool, epsilon, poly);
	},

	// helper functions for common operations
	union: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectUnion);
	},
	intersect: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectIntersect);
	},
	difference: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectDifference);
	},
	differenceRev: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectDifferenceRev);
	},
	xor: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectXor);
	}
};

function operate(poly1, poly2, selector){
	var seg1 = PolyBool.segments(poly1);
	var seg2 = PolyBool.segments(poly2);
	var comb = PolyBool.combine(seg1, seg2);
	var seg3 = selector(comb);
	return PolyBool.polygon(seg3);
}

if (typeof window === 'object')
	window.PolyBool = PolyBool;

module.exports = PolyBool;


/***/ }),

/***/ "../node_modules/polybooljs/lib/build-log.js":
/*!***************************************************!*\
  !*** ../node_modules/polybooljs/lib/build-log.js ***!
  \***************************************************/
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// used strictly for logging the processing of the algorithm... only useful if you intend on
// looking under the covers (for pretty UI's or debugging)
//

function BuildLog(){
	var my;
	var nextSegmentId = 0;
	var curVert = false;

	function push(type, data){
		my.list.push({
			type: type,
			data: data ? JSON.parse(JSON.stringify(data)) : void 0
		});
		return my;
	}

	my = {
		list: [],
		segmentId: function(){
			return nextSegmentId++;
		},
		checkIntersection: function(seg1, seg2){
			return push('check', { seg1: seg1, seg2: seg2 });
		},
		segmentChop: function(seg, end){
			push('div_seg', { seg: seg, pt: end });
			return push('chop', { seg: seg, pt: end });
		},
		statusRemove: function(seg){
			return push('pop_seg', { seg: seg });
		},
		segmentUpdate: function(seg){
			return push('seg_update', { seg: seg });
		},
		segmentNew: function(seg, primary){
			return push('new_seg', { seg: seg, primary: primary });
		},
		segmentRemove: function(seg){
			return push('rem_seg', { seg: seg });
		},
		tempStatus: function(seg, above, below){
			return push('temp_status', { seg: seg, above: above, below: below });
		},
		rewind: function(seg){
			return push('rewind', { seg: seg });
		},
		status: function(seg, above, below){
			return push('status', { seg: seg, above: above, below: below });
		},
		vert: function(x){
			if (x === curVert)
				return my;
			curVert = x;
			return push('vert', { x: x });
		},
		log: function(data){
			if (typeof data !== 'string')
				data = JSON.stringify(data, false, '  ');
			return push('log', { txt: data });
		},
		reset: function(){
			return push('reset');
		},
		selected: function(segs){
			return push('selected', { segs: segs });
		},
		chainStart: function(seg){
			return push('chain_start', { seg: seg });
		},
		chainRemoveHead: function(index, pt){
			return push('chain_rem_head', { index: index, pt: pt });
		},
		chainRemoveTail: function(index, pt){
			return push('chain_rem_tail', { index: index, pt: pt });
		},
		chainNew: function(pt1, pt2){
			return push('chain_new', { pt1: pt1, pt2: pt2 });
		},
		chainMatch: function(index){
			return push('chain_match', { index: index });
		},
		chainClose: function(index){
			return push('chain_close', { index: index });
		},
		chainAddHead: function(index, pt){
			return push('chain_add_head', { index: index, pt: pt });
		},
		chainAddTail: function(index, pt){
			return push('chain_add_tail', { index: index, pt: pt, });
		},
		chainConnect: function(index1, index2){
			return push('chain_con', { index1: index1, index2: index2 });
		},
		chainReverse: function(index){
			return push('chain_rev', { index: index });
		},
		chainJoin: function(index1, index2){
			return push('chain_join', { index1: index1, index2: index2 });
		},
		done: function(){
			return push('done');
		}
	};
	return my;
}

module.exports = BuildLog;


/***/ }),

/***/ "../node_modules/polybooljs/lib/epsilon.js":
/*!*************************************************!*\
  !*** ../node_modules/polybooljs/lib/epsilon.js ***!
  \*************************************************/
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// provides the raw computation functions that takes epsilon into account
//
// zero is defined to be between (-epsilon, epsilon) exclusive
//

function Epsilon(eps){
	if (typeof eps !== 'number')
		eps = 0.0000000001; // sane default? sure why not
	var my = {
		epsilon: function(v){
			if (typeof v === 'number')
				eps = v;
			return eps;
		},
		pointAboveOrOnLine: function(pt, left, right){
			var Ax = left[0];
			var Ay = left[1];
			var Bx = right[0];
			var By = right[1];
			var Cx = pt[0];
			var Cy = pt[1];
			return (Bx - Ax) * (Cy - Ay) - (By - Ay) * (Cx - Ax) >= -eps;
		},
		pointBetween: function(p, left, right){
			// p must be collinear with left->right
			// returns false if p == left, p == right, or left == right
			var d_py_ly = p[1] - left[1];
			var d_rx_lx = right[0] - left[0];
			var d_px_lx = p[0] - left[0];
			var d_ry_ly = right[1] - left[1];

			var dot = d_px_lx * d_rx_lx + d_py_ly * d_ry_ly;
			// if `dot` is 0, then `p` == `left` or `left` == `right` (reject)
			// if `dot` is less than 0, then `p` is to the left of `left` (reject)
			if (dot < eps)
				return false;

			var sqlen = d_rx_lx * d_rx_lx + d_ry_ly * d_ry_ly;
			// if `dot` > `sqlen`, then `p` is to the right of `right` (reject)
			// therefore, if `dot - sqlen` is greater than 0, then `p` is to the right of `right` (reject)
			if (dot - sqlen > -eps)
				return false;

			return true;
		},
		pointsSameX: function(p1, p2){
			return Math.abs(p1[0] - p2[0]) < eps;
		},
		pointsSameY: function(p1, p2){
			return Math.abs(p1[1] - p2[1]) < eps;
		},
		pointsSame: function(p1, p2){
			return my.pointsSameX(p1, p2) && my.pointsSameY(p1, p2);
		},
		pointsCompare: function(p1, p2){
			// returns -1 if p1 is smaller, 1 if p2 is smaller, 0 if equal
			if (my.pointsSameX(p1, p2))
				return my.pointsSameY(p1, p2) ? 0 : (p1[1] < p2[1] ? -1 : 1);
			return p1[0] < p2[0] ? -1 : 1;
		},
		pointsCollinear: function(pt1, pt2, pt3){
			// does pt1->pt2->pt3 make a straight line?
			// essentially this is just checking to see if the slope(pt1->pt2) === slope(pt2->pt3)
			// if slopes are equal, then they must be collinear, because they share pt2
			var dx1 = pt1[0] - pt2[0];
			var dy1 = pt1[1] - pt2[1];
			var dx2 = pt2[0] - pt3[0];
			var dy2 = pt2[1] - pt3[1];
			return Math.abs(dx1 * dy2 - dx2 * dy1) < eps;
		},
		linesIntersect: function(a0, a1, b0, b1){
			// returns false if the lines are coincident (e.g., parallel or on top of each other)
			//
			// returns an object if the lines intersect:
			//   {
			//     pt: [x, y],    where the intersection point is at
			//     alongA: where intersection point is along A,
			//     alongB: where intersection point is along B
			//   }
			//
			//  alongA and alongB will each be one of: -2, -1, 0, 1, 2
			//
			//  with the following meaning:
			//
			//    -2   intersection point is before segment's first point
			//    -1   intersection point is directly on segment's first point
			//     0   intersection point is between segment's first and second points (exclusive)
			//     1   intersection point is directly on segment's second point
			//     2   intersection point is after segment's second point
			var adx = a1[0] - a0[0];
			var ady = a1[1] - a0[1];
			var bdx = b1[0] - b0[0];
			var bdy = b1[1] - b0[1];

			var axb = adx * bdy - ady * bdx;
			if (Math.abs(axb) < eps)
				return false; // lines are coincident

			var dx = a0[0] - b0[0];
			var dy = a0[1] - b0[1];

			var A = (bdx * dy - bdy * dx) / axb;
			var B = (adx * dy - ady * dx) / axb;

			var ret = {
				alongA: 0,
				alongB: 0,
				pt: [
					a0[0] + A * adx,
					a0[1] + A * ady
				]
			};

			// categorize where intersection point is along A and B

			if (A <= -eps)
				ret.alongA = -2;
			else if (A < eps)
				ret.alongA = -1;
			else if (A - 1 <= -eps)
				ret.alongA = 0;
			else if (A - 1 < eps)
				ret.alongA = 1;
			else
				ret.alongA = 2;

			if (B <= -eps)
				ret.alongB = -2;
			else if (B < eps)
				ret.alongB = -1;
			else if (B - 1 <= -eps)
				ret.alongB = 0;
			else if (B - 1 < eps)
				ret.alongB = 1;
			else
				ret.alongB = 2;

			return ret;
		},
		pointInsideRegion: function(pt, region){
			var x = pt[0];
			var y = pt[1];
			var last_x = region[region.length - 1][0];
			var last_y = region[region.length - 1][1];
			var inside = false;
			for (var i = 0; i < region.length; i++){
				var curr_x = region[i][0];
				var curr_y = region[i][1];

				// if y is between curr_y and last_y, and
				// x is to the right of the boundary created by the line
				if ((curr_y - y > eps) != (last_y - y > eps) &&
					(last_x - curr_x) * (y - curr_y) / (last_y - curr_y) + curr_x - x > eps)
					inside = !inside

				last_x = curr_x;
				last_y = curr_y;
			}
			return inside;
		}
	};
	return my;
}

module.exports = Epsilon;


/***/ }),

/***/ "../node_modules/polybooljs/lib/geojson.js":
/*!*************************************************!*\
  !*** ../node_modules/polybooljs/lib/geojson.js ***!
  \*************************************************/
/***/ ((module) => {

// (c) Copyright 2017, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// convert between PolyBool polygon format and GeoJSON formats (Polygon and MultiPolygon)
//

var GeoJSON = {
	// convert a GeoJSON object to a PolyBool polygon
	toPolygon: function(PolyBool, geojson){

		// converts list of LineString's to segments
		function GeoPoly(coords){
			// check for empty coords
			if (coords.length <= 0)
				return PolyBool.segments({ inverted: false, regions: [] });

			// convert LineString to segments
			function LineString(ls){
				// remove tail which should be the same as head
				var reg = ls.slice(0, ls.length - 1);
				return PolyBool.segments({ inverted: false, regions: [reg] });
			}

			// the first LineString is considered the outside
			var out = LineString(coords[0]);

			// the rest of the LineStrings are considered interior holes, so subtract them from the
			// current result
			for (var i = 1; i < coords.length; i++)
				out = PolyBool.selectDifference(PolyBool.combine(out, LineString(coords[i])));

			return out;
		}

		if (geojson.type === 'Polygon'){
			// single polygon, so just convert it and we're done
			return PolyBool.polygon(GeoPoly(geojson.coordinates));
		}
		else if (geojson.type === 'MultiPolygon'){
			// multiple polygons, so union all the polygons together
			var out = PolyBool.segments({ inverted: false, regions: [] });
			for (var i = 0; i < geojson.coordinates.length; i++)
				out = PolyBool.selectUnion(PolyBool.combine(out, GeoPoly(geojson.coordinates[i])));
			return PolyBool.polygon(out);
		}
		throw new Error('PolyBool: Cannot convert GeoJSON object to PolyBool polygon');
	},

	// convert a PolyBool polygon to a GeoJSON object
	fromPolygon: function(PolyBool, eps, poly){
		// make sure out polygon is clean
		poly = PolyBool.polygon(PolyBool.segments(poly));

		// test if r1 is inside r2
		function regionInsideRegion(r1, r2){
			// we're guaranteed no lines intersect (because the polygon is clean), but a vertex
			// could be on the edge -- so we just average pt[0] and pt[1] to produce a point on the
			// edge of the first line, which cannot be on an edge
			return eps.pointInsideRegion([
				(r1[0][0] + r1[1][0]) * 0.5,
				(r1[0][1] + r1[1][1]) * 0.5
			], r2);
		}

		// calculate inside heirarchy
		//
		//  _____________________   _______    roots -> A       -> F
		// |          A          | |   F   |            |          |
		// |  _______   _______  | |  ___  |            +-- B      +-- G
		// | |   B   | |   C   | | | |   | |            |   |
		// | |  ___  | |  ___  | | | |   | |            |   +-- D
		// | | | D | | | | E | | | | | G | |            |
		// | | |___| | | |___| | | | |   | |            +-- C
		// | |_______| |_______| | | |___| |                |
		// |_____________________| |_______|                +-- E

		function newNode(region){
			return {
				region: region,
				children: []
			};
		}

		var roots = newNode(null);

		function addChild(root, region){
			// first check if we're inside any children
			for (var i = 0; i < root.children.length; i++){
				var child = root.children[i];
				if (regionInsideRegion(region, child.region)){
					// we are, so insert inside them instead
					addChild(child, region);
					return;
				}
			}

			// not inside any children, so check to see if any children are inside us
			var node = newNode(region);
			for (var i = 0; i < root.children.length; i++){
				var child = root.children[i];
				if (regionInsideRegion(child.region, region)){
					// oops... move the child beneath us, and remove them from root
					node.children.push(child);
					root.children.splice(i, 1);
					i--;
				}
			}

			// now we can add ourselves
			root.children.push(node);
		}

		// add all regions to the root
		for (var i = 0; i < poly.regions.length; i++){
			var region = poly.regions[i];
			if (region.length < 3) // regions must have at least 3 points (sanity check)
				continue;
			addChild(roots, region);
		}

		// with our heirarchy, we can distinguish between exterior borders, and interior holes
		// the root nodes are exterior, children are interior, children's children are exterior,
		// children's children's children are interior, etc

		// while we're at it, exteriors are counter-clockwise, and interiors are clockwise

		function forceWinding(region, clockwise){
			// first, see if we're clockwise or counter-clockwise
			// https://en.wikipedia.org/wiki/Shoelace_formula
			var winding = 0;
			var last_x = region[region.length - 1][0];
			var last_y = region[region.length - 1][1];
			var copy = [];
			for (var i = 0; i < region.length; i++){
				var curr_x = region[i][0];
				var curr_y = region[i][1];
				copy.push([curr_x, curr_y]); // create a copy while we're at it
				winding += curr_y * last_x - curr_x * last_y;
				last_x = curr_x;
				last_y = curr_y;
			}
			// this assumes Cartesian coordinates (Y is positive going up)
			var isclockwise = winding < 0;
			if (isclockwise !== clockwise)
				copy.reverse();
			// while we're here, the last point must be the first point...
			copy.push([copy[0][0], copy[0][1]]);
			return copy;
		}

		var geopolys = [];

		function addExterior(node){
			var poly = [forceWinding(node.region, false)];
			geopolys.push(poly);
			// children of exteriors are interior
			for (var i = 0; i < node.children.length; i++)
				poly.push(getInterior(node.children[i]));
		}

		function getInterior(node){
			// children of interiors are exterior
			for (var i = 0; i < node.children.length; i++)
				addExterior(node.children[i]);
			// return the clockwise interior
			return forceWinding(node.region, true);
		}

		// root nodes are exterior
		for (var i = 0; i < roots.children.length; i++)
			addExterior(roots.children[i]);

		// lastly, construct the approrpriate GeoJSON object

		if (geopolys.length <= 0) // empty GeoJSON Polygon
			return { type: 'Polygon', coordinates: [] };
		if (geopolys.length == 1) // use a GeoJSON Polygon
			return { type: 'Polygon', coordinates: geopolys[0] };
		return { // otherwise, use a GeoJSON MultiPolygon
			type: 'MultiPolygon',
			coordinates: geopolys
		};
	}
};

module.exports = GeoJSON;


/***/ }),

/***/ "../node_modules/polybooljs/lib/intersecter.js":
/*!*****************************************************!*\
  !*** ../node_modules/polybooljs/lib/intersecter.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// this is the core work-horse
//

var LinkedList = __webpack_require__(/*! ./linked-list */ "../node_modules/polybooljs/lib/linked-list.js");

function Intersecter(selfIntersection, eps, buildLog){
	// selfIntersection is true/false depending on the phase of the overall algorithm

	//
	// segment creation
	//

	function segmentNew(start, end){
		return {
			id: buildLog ? buildLog.segmentId() : -1,
			start: start,
			end: end,
			myFill: {
				above: null, // is there fill above us?
				below: null  // is there fill below us?
			},
			otherFill: null
		};
	}

	function segmentCopy(start, end, seg){
		return {
			id: buildLog ? buildLog.segmentId() : -1,
			start: start,
			end: end,
			myFill: {
				above: seg.myFill.above,
				below: seg.myFill.below
			},
			otherFill: null
		};
	}

	//
	// event logic
	//

	var event_root = LinkedList.create();

	function eventCompare(p1_isStart, p1_1, p1_2, p2_isStart, p2_1, p2_2){
		// compare the selected points first
		var comp = eps.pointsCompare(p1_1, p2_1);
		if (comp !== 0)
			return comp;
		// the selected points are the same

		if (eps.pointsSame(p1_2, p2_2)) // if the non-selected points are the same too...
			return 0; // then the segments are equal

		if (p1_isStart !== p2_isStart) // if one is a start and the other isn't...
			return p1_isStart ? 1 : -1; // favor the one that isn't the start

		// otherwise, we'll have to calculate which one is below the other manually
		return eps.pointAboveOrOnLine(p1_2,
			p2_isStart ? p2_1 : p2_2, // order matters
			p2_isStart ? p2_2 : p2_1
		) ? 1 : -1;
	}

	function eventAdd(ev, other_pt){
		event_root.insertBefore(ev, function(here){
			// should ev be inserted before here?
			var comp = eventCompare(
				ev  .isStart, ev  .pt,      other_pt,
				here.isStart, here.pt, here.other.pt
			);
			return comp < 0;
		});
	}

	function eventAddSegmentStart(seg, primary){
		var ev_start = LinkedList.node({
			isStart: true,
			pt: seg.start,
			seg: seg,
			primary: primary,
			other: null,
			status: null
		});
		eventAdd(ev_start, seg.end);
		return ev_start;
	}

	function eventAddSegmentEnd(ev_start, seg, primary){
		var ev_end = LinkedList.node({
			isStart: false,
			pt: seg.end,
			seg: seg,
			primary: primary,
			other: ev_start,
			status: null
		});
		ev_start.other = ev_end;
		eventAdd(ev_end, ev_start.pt);
	}

	function eventAddSegment(seg, primary){
		var ev_start = eventAddSegmentStart(seg, primary);
		eventAddSegmentEnd(ev_start, seg, primary);
		return ev_start;
	}

	function eventUpdateEnd(ev, end){
		// slides an end backwards
		//   (start)------------(end)    to:
		//   (start)---(end)

		if (buildLog)
			buildLog.segmentChop(ev.seg, end);

		ev.other.remove();
		ev.seg.end = end;
		ev.other.pt = end;
		eventAdd(ev.other, ev.pt);
	}

	function eventDivide(ev, pt){
		var ns = segmentCopy(pt, ev.seg.end, ev.seg);
		eventUpdateEnd(ev, pt);
		return eventAddSegment(ns, ev.primary);
	}

	function calculate(primaryPolyInverted, secondaryPolyInverted){
		// if selfIntersection is true then there is no secondary polygon, so that isn't used

		//
		// status logic
		//

		var status_root = LinkedList.create();

		function statusCompare(ev1, ev2){
			var a1 = ev1.seg.start;
			var a2 = ev1.seg.end;
			var b1 = ev2.seg.start;
			var b2 = ev2.seg.end;

			if (eps.pointsCollinear(a1, b1, b2)){
				if (eps.pointsCollinear(a2, b1, b2))
					return 1;//eventCompare(true, a1, a2, true, b1, b2);
				return eps.pointAboveOrOnLine(a2, b1, b2) ? 1 : -1;
			}
			return eps.pointAboveOrOnLine(a1, b1, b2) ? 1 : -1;
		}

		function statusFindSurrounding(ev){
			return status_root.findTransition(function(here){
				var comp = statusCompare(ev, here.ev);
				return comp > 0;
			});
		}

		function checkIntersection(ev1, ev2){
			// returns the segment equal to ev1, or false if nothing equal

			var seg1 = ev1.seg;
			var seg2 = ev2.seg;
			var a1 = seg1.start;
			var a2 = seg1.end;
			var b1 = seg2.start;
			var b2 = seg2.end;

			if (buildLog)
				buildLog.checkIntersection(seg1, seg2);

			var i = eps.linesIntersect(a1, a2, b1, b2);

			if (i === false){
				// segments are parallel or coincident

				// if points aren't collinear, then the segments are parallel, so no intersections
				if (!eps.pointsCollinear(a1, a2, b1))
					return false;
				// otherwise, segments are on top of each other somehow (aka coincident)

				if (eps.pointsSame(a1, b2) || eps.pointsSame(a2, b1))
					return false; // segments touch at endpoints... no intersection

				var a1_equ_b1 = eps.pointsSame(a1, b1);
				var a2_equ_b2 = eps.pointsSame(a2, b2);

				if (a1_equ_b1 && a2_equ_b2)
					return ev2; // segments are exactly equal

				var a1_between = !a1_equ_b1 && eps.pointBetween(a1, b1, b2);
				var a2_between = !a2_equ_b2 && eps.pointBetween(a2, b1, b2);

				// handy for debugging:
				// buildLog.log({
				//	a1_equ_b1: a1_equ_b1,
				//	a2_equ_b2: a2_equ_b2,
				//	a1_between: a1_between,
				//	a2_between: a2_between
				// });

				if (a1_equ_b1){
					if (a2_between){
						//  (a1)---(a2)
						//  (b1)----------(b2)
						eventDivide(ev2, a2);
					}
					else{
						//  (a1)----------(a2)
						//  (b1)---(b2)
						eventDivide(ev1, b2);
					}
					return ev2;
				}
				else if (a1_between){
					if (!a2_equ_b2){
						// make a2 equal to b2
						if (a2_between){
							//         (a1)---(a2)
							//  (b1)-----------------(b2)
							eventDivide(ev2, a2);
						}
						else{
							//         (a1)----------(a2)
							//  (b1)----------(b2)
							eventDivide(ev1, b2);
						}
					}

					//         (a1)---(a2)
					//  (b1)----------(b2)
					eventDivide(ev2, a1);
				}
			}
			else{
				// otherwise, lines intersect at i.pt, which may or may not be between the endpoints

				// is A divided between its endpoints? (exclusive)
				if (i.alongA === 0){
					if (i.alongB === -1) // yes, at exactly b1
						eventDivide(ev1, b1);
					else if (i.alongB === 0) // yes, somewhere between B's endpoints
						eventDivide(ev1, i.pt);
					else if (i.alongB === 1) // yes, at exactly b2
						eventDivide(ev1, b2);
				}

				// is B divided between its endpoints? (exclusive)
				if (i.alongB === 0){
					if (i.alongA === -1) // yes, at exactly a1
						eventDivide(ev2, a1);
					else if (i.alongA === 0) // yes, somewhere between A's endpoints (exclusive)
						eventDivide(ev2, i.pt);
					else if (i.alongA === 1) // yes, at exactly a2
						eventDivide(ev2, a2);
				}
			}
			return false;
		}

		//
		// main event loop
		//
		var segments = [];
		while (!event_root.isEmpty()){
			var ev = event_root.getHead();

			if (buildLog)
				buildLog.vert(ev.pt[0]);

			if (ev.isStart){

				if (buildLog)
					buildLog.segmentNew(ev.seg, ev.primary);

				var surrounding = statusFindSurrounding(ev);
				var above = surrounding.before ? surrounding.before.ev : null;
				var below = surrounding.after ? surrounding.after.ev : null;

				if (buildLog){
					buildLog.tempStatus(
						ev.seg,
						above ? above.seg : false,
						below ? below.seg : false
					);
				}

				function checkBothIntersections(){
					if (above){
						var eve = checkIntersection(ev, above);
						if (eve)
							return eve;
					}
					if (below)
						return checkIntersection(ev, below);
					return false;
				}

				var eve = checkBothIntersections();
				if (eve){
					// ev and eve are equal
					// we'll keep eve and throw away ev

					// merge ev.seg's fill information into eve.seg

					if (selfIntersection){
						var toggle; // are we a toggling edge?
						if (ev.seg.myFill.below === null)
							toggle = true;
						else
							toggle = ev.seg.myFill.above !== ev.seg.myFill.below;

						// merge two segments that belong to the same polygon
						// think of this as sandwiching two segments together, where `eve.seg` is
						// the bottom -- this will cause the above fill flag to toggle
						if (toggle)
							eve.seg.myFill.above = !eve.seg.myFill.above;
					}
					else{
						// merge two segments that belong to different polygons
						// each segment has distinct knowledge, so no special logic is needed
						// note that this can only happen once per segment in this phase, because we
						// are guaranteed that all self-intersections are gone
						eve.seg.otherFill = ev.seg.myFill;
					}

					if (buildLog)
						buildLog.segmentUpdate(eve.seg);

					ev.other.remove();
					ev.remove();
				}

				if (event_root.getHead() !== ev){
					// something was inserted before us in the event queue, so loop back around and
					// process it before continuing
					if (buildLog)
						buildLog.rewind(ev.seg);
					continue;
				}

				//
				// calculate fill flags
				//
				if (selfIntersection){
					var toggle; // are we a toggling edge?
					if (ev.seg.myFill.below === null) // if we are a new segment...
						toggle = true; // then we toggle
					else // we are a segment that has previous knowledge from a division
						toggle = ev.seg.myFill.above !== ev.seg.myFill.below; // calculate toggle

					// next, calculate whether we are filled below us
					if (!below){ // if nothing is below us...
						// we are filled below us if the polygon is inverted
						ev.seg.myFill.below = primaryPolyInverted;
					}
					else{
						// otherwise, we know the answer -- it's the same if whatever is below
						// us is filled above it
						ev.seg.myFill.below = below.seg.myFill.above;
					}

					// since now we know if we're filled below us, we can calculate whether
					// we're filled above us by applying toggle to whatever is below us
					if (toggle)
						ev.seg.myFill.above = !ev.seg.myFill.below;
					else
						ev.seg.myFill.above = ev.seg.myFill.below;
				}
				else{
					// now we fill in any missing transition information, since we are all-knowing
					// at this point

					if (ev.seg.otherFill === null){
						// if we don't have other information, then we need to figure out if we're
						// inside the other polygon
						var inside;
						if (!below){
							// if nothing is below us, then we're inside if the other polygon is
							// inverted
							inside =
								ev.primary ? secondaryPolyInverted : primaryPolyInverted;
						}
						else{ // otherwise, something is below us
							// so copy the below segment's other polygon's above
							if (ev.primary === below.primary)
								inside = below.seg.otherFill.above;
							else
								inside = below.seg.myFill.above;
						}
						ev.seg.otherFill = {
							above: inside,
							below: inside
						};
					}
				}

				if (buildLog){
					buildLog.status(
						ev.seg,
						above ? above.seg : false,
						below ? below.seg : false
					);
				}

				// insert the status and remember it for later removal
				ev.other.status = surrounding.insert(LinkedList.node({ ev: ev }));
			}
			else{
				var st = ev.status;

				if (st === null){
					throw new Error('PolyBool: Zero-length segment detected; your epsilon is ' +
						'probably too small or too large');
				}

				// removing the status will create two new adjacent edges, so we'll need to check
				// for those
				if (status_root.exists(st.prev) && status_root.exists(st.next))
					checkIntersection(st.prev.ev, st.next.ev);

				if (buildLog)
					buildLog.statusRemove(st.ev.seg);

				// remove the status
				st.remove();

				// if we've reached this point, we've calculated everything there is to know, so
				// save the segment for reporting
				if (!ev.primary){
					// make sure `seg.myFill` actually points to the primary polygon though
					var s = ev.seg.myFill;
					ev.seg.myFill = ev.seg.otherFill;
					ev.seg.otherFill = s;
				}
				segments.push(ev.seg);
			}

			// remove the event and continue
			event_root.getHead().remove();
		}

		if (buildLog)
			buildLog.done();

		return segments;
	}

	// return the appropriate API depending on what we're doing
	if (!selfIntersection){
		// performing combination of polygons, so only deal with already-processed segments
		return {
			calculate: function(segments1, inverted1, segments2, inverted2){
				// segmentsX come from the self-intersection API, or this API
				// invertedX is whether we treat that list of segments as an inverted polygon or not
				// returns segments that can be used for further operations
				segments1.forEach(function(seg){
					eventAddSegment(segmentCopy(seg.start, seg.end, seg), true);
				});
				segments2.forEach(function(seg){
					eventAddSegment(segmentCopy(seg.start, seg.end, seg), false);
				});
				return calculate(inverted1, inverted2);
			}
		};
	}

	// otherwise, performing self-intersection, so deal with regions
	return {
		addRegion: function(region){
			// regions are a list of points:
			//  [ [0, 0], [100, 0], [50, 100] ]
			// you can add multiple regions before running calculate
			var pt1;
			var pt2 = region[region.length - 1];
			for (var i = 0; i < region.length; i++){
				pt1 = pt2;
				pt2 = region[i];

				var forward = eps.pointsCompare(pt1, pt2);
				if (forward === 0) // points are equal, so we have a zero-length segment
					continue; // just skip it

				eventAddSegment(
					segmentNew(
						forward < 0 ? pt1 : pt2,
						forward < 0 ? pt2 : pt1
					),
					true
				);
			}
		},
		calculate: function(inverted){
			// is the polygon inverted?
			// returns segments
			return calculate(inverted, false);
		}
	};
}

module.exports = Intersecter;


/***/ }),

/***/ "../node_modules/polybooljs/lib/linked-list.js":
/*!*****************************************************!*\
  !*** ../node_modules/polybooljs/lib/linked-list.js ***!
  \*****************************************************/
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// simple linked list implementation that allows you to traverse down nodes and save positions
//

var LinkedList = {
	create: function(){
		var my = {
			root: { root: true, next: null },
			exists: function(node){
				if (node === null || node === my.root)
					return false;
				return true;
			},
			isEmpty: function(){
				return my.root.next === null;
			},
			getHead: function(){
				return my.root.next;
			},
			insertBefore: function(node, check){
				var last = my.root;
				var here = my.root.next;
				while (here !== null){
					if (check(here)){
						node.prev = here.prev;
						node.next = here;
						here.prev.next = node;
						here.prev = node;
						return;
					}
					last = here;
					here = here.next;
				}
				last.next = node;
				node.prev = last;
				node.next = null;
			},
			findTransition: function(check){
				var prev = my.root;
				var here = my.root.next;
				while (here !== null){
					if (check(here))
						break;
					prev = here;
					here = here.next;
				}
				return {
					before: prev === my.root ? null : prev,
					after: here,
					insert: function(node){
						node.prev = prev;
						node.next = here;
						prev.next = node;
						if (here !== null)
							here.prev = node;
						return node;
					}
				};
			}
		};
		return my;
	},
	node: function(data){
		data.prev = null;
		data.next = null;
		data.remove = function(){
			data.prev.next = data.next;
			if (data.next)
				data.next.prev = data.prev;
			data.prev = null;
			data.next = null;
		};
		return data;
	}
};

module.exports = LinkedList;


/***/ }),

/***/ "../node_modules/polybooljs/lib/segment-chainer.js":
/*!*********************************************************!*\
  !*** ../node_modules/polybooljs/lib/segment-chainer.js ***!
  \*********************************************************/
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// converts a list of segments into a list of regions, while also removing unnecessary verticies
//

function SegmentChainer(segments, eps, buildLog){
	var chains = [];
	var regions = [];

	segments.forEach(function(seg){
		var pt1 = seg.start;
		var pt2 = seg.end;
		if (eps.pointsSame(pt1, pt2)){
			console.warn('PolyBool: Warning: Zero-length segment detected; your epsilon is ' +
				'probably too small or too large');
			return;
		}

		if (buildLog)
			buildLog.chainStart(seg);

		// search for two chains that this segment matches
		var first_match = {
			index: 0,
			matches_head: false,
			matches_pt1: false
		};
		var second_match = {
			index: 0,
			matches_head: false,
			matches_pt1: false
		};
		var next_match = first_match;
		function setMatch(index, matches_head, matches_pt1){
			// return true if we've matched twice
			next_match.index = index;
			next_match.matches_head = matches_head;
			next_match.matches_pt1 = matches_pt1;
			if (next_match === first_match){
				next_match = second_match;
				return false;
			}
			next_match = null;
			return true; // we've matched twice, we're done here
		}
		for (var i = 0; i < chains.length; i++){
			var chain = chains[i];
			var head  = chain[0];
			var head2 = chain[1];
			var tail  = chain[chain.length - 1];
			var tail2 = chain[chain.length - 2];
			if (eps.pointsSame(head, pt1)){
				if (setMatch(i, true, true))
					break;
			}
			else if (eps.pointsSame(head, pt2)){
				if (setMatch(i, true, false))
					break;
			}
			else if (eps.pointsSame(tail, pt1)){
				if (setMatch(i, false, true))
					break;
			}
			else if (eps.pointsSame(tail, pt2)){
				if (setMatch(i, false, false))
					break;
			}
		}

		if (next_match === first_match){
			// we didn't match anything, so create a new chain
			chains.push([ pt1, pt2 ]);
			if (buildLog)
				buildLog.chainNew(pt1, pt2);
			return;
		}

		if (next_match === second_match){
			// we matched a single chain

			if (buildLog)
				buildLog.chainMatch(first_match.index);

			// add the other point to the apporpriate end, and check to see if we've closed the
			// chain into a loop

			var index = first_match.index;
			var pt = first_match.matches_pt1 ? pt2 : pt1; // if we matched pt1, then we add pt2, etc
			var addToHead = first_match.matches_head; // if we matched at head, then add to the head

			var chain = chains[index];
			var grow  = addToHead ? chain[0] : chain[chain.length - 1];
			var grow2 = addToHead ? chain[1] : chain[chain.length - 2];
			var oppo  = addToHead ? chain[chain.length - 1] : chain[0];
			var oppo2 = addToHead ? chain[chain.length - 2] : chain[1];

			if (eps.pointsCollinear(grow2, grow, pt)){
				// grow isn't needed because it's directly between grow2 and pt:
				// grow2 ---grow---> pt
				if (addToHead){
					if (buildLog)
						buildLog.chainRemoveHead(first_match.index, pt);
					chain.shift();
				}
				else{
					if (buildLog)
						buildLog.chainRemoveTail(first_match.index, pt);
					chain.pop();
				}
				grow = grow2; // old grow is gone... new grow is what grow2 was
			}

			if (eps.pointsSame(oppo, pt)){
				// we're closing the loop, so remove chain from chains
				chains.splice(index, 1);

				if (eps.pointsCollinear(oppo2, oppo, grow)){
					// oppo isn't needed because it's directly between oppo2 and grow:
					// oppo2 ---oppo--->grow
					if (addToHead){
						if (buildLog)
							buildLog.chainRemoveTail(first_match.index, grow);
						chain.pop();
					}
					else{
						if (buildLog)
							buildLog.chainRemoveHead(first_match.index, grow);
						chain.shift();
					}
				}

				if (buildLog)
					buildLog.chainClose(first_match.index);

				// we have a closed chain!
				regions.push(chain);
				return;
			}

			// not closing a loop, so just add it to the apporpriate side
			if (addToHead){
				if (buildLog)
					buildLog.chainAddHead(first_match.index, pt);
				chain.unshift(pt);
			}
			else{
				if (buildLog)
					buildLog.chainAddTail(first_match.index, pt);
				chain.push(pt);
			}
			return;
		}

		// otherwise, we matched two chains, so we need to combine those chains together

		function reverseChain(index){
			if (buildLog)
				buildLog.chainReverse(index);
			chains[index].reverse(); // gee, that's easy
		}

		function appendChain(index1, index2){
			// index1 gets index2 appended to it, and index2 is removed
			var chain1 = chains[index1];
			var chain2 = chains[index2];
			var tail  = chain1[chain1.length - 1];
			var tail2 = chain1[chain1.length - 2];
			var head  = chain2[0];
			var head2 = chain2[1];

			if (eps.pointsCollinear(tail2, tail, head)){
				// tail isn't needed because it's directly between tail2 and head
				// tail2 ---tail---> head
				if (buildLog)
					buildLog.chainRemoveTail(index1, tail);
				chain1.pop();
				tail = tail2; // old tail is gone... new tail is what tail2 was
			}

			if (eps.pointsCollinear(tail, head, head2)){
				// head isn't needed because it's directly between tail and head2
				// tail ---head---> head2
				if (buildLog)
					buildLog.chainRemoveHead(index2, head);
				chain2.shift();
			}

			if (buildLog)
				buildLog.chainJoin(index1, index2);
			chains[index1] = chain1.concat(chain2);
			chains.splice(index2, 1);
		}

		var F = first_match.index;
		var S = second_match.index;

		if (buildLog)
			buildLog.chainConnect(F, S);

		var reverseF = chains[F].length < chains[S].length; // reverse the shorter chain, if needed
		if (first_match.matches_head){
			if (second_match.matches_head){
				if (reverseF){
					// <<<< F <<<< --- >>>> S >>>>
					reverseChain(F);
					// >>>> F >>>> --- >>>> S >>>>
					appendChain(F, S);
				}
				else{
					// <<<< F <<<< --- >>>> S >>>>
					reverseChain(S);
					// <<<< F <<<< --- <<<< S <<<<   logically same as:
					// >>>> S >>>> --- >>>> F >>>>
					appendChain(S, F);
				}
			}
			else{
				// <<<< F <<<< --- <<<< S <<<<   logically same as:
				// >>>> S >>>> --- >>>> F >>>>
				appendChain(S, F);
			}
		}
		else{
			if (second_match.matches_head){
				// >>>> F >>>> --- >>>> S >>>>
				appendChain(F, S);
			}
			else{
				if (reverseF){
					// >>>> F >>>> --- <<<< S <<<<
					reverseChain(F);
					// <<<< F <<<< --- <<<< S <<<<   logically same as:
					// >>>> S >>>> --- >>>> F >>>>
					appendChain(S, F);
				}
				else{
					// >>>> F >>>> --- <<<< S <<<<
					reverseChain(S);
					// >>>> F >>>> --- >>>> S >>>>
					appendChain(F, S);
				}
			}
		}
	});

	return regions;
}

module.exports = SegmentChainer;


/***/ }),

/***/ "../node_modules/polybooljs/lib/segment-selector.js":
/*!**********************************************************!*\
  !*** ../node_modules/polybooljs/lib/segment-selector.js ***!
  \**********************************************************/
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// filter a list of segments based on boolean operations
//

function select(segments, selection, buildLog){
	var result = [];
	segments.forEach(function(seg){
		var index =
			(seg.myFill.above ? 8 : 0) +
			(seg.myFill.below ? 4 : 0) +
			((seg.otherFill && seg.otherFill.above) ? 2 : 0) +
			((seg.otherFill && seg.otherFill.below) ? 1 : 0);
		if (selection[index] !== 0){
			// copy the segment to the results, while also calculating the fill status
			result.push({
				id: buildLog ? buildLog.segmentId() : -1,
				start: seg.start,
				end: seg.end,
				myFill: {
					above: selection[index] === 1, // 1 if filled above
					below: selection[index] === 2  // 2 if filled below
				},
				otherFill: null
			});
		}
	});

	if (buildLog)
		buildLog.selected(result);

	return result;
}

var SegmentSelector = {
	union: function(segments, buildLog){ // primary | secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   yes filled below    2
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   no                  0
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   yes filled above    1
		//    1      0      1      1   =>   no                  0
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   no                  0
		//    1      1      1      0   =>   no                  0
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			2, 2, 0, 0,
			1, 0, 1, 0,
			0, 0, 0, 0
		], buildLog);
	},
	intersect: function(segments, buildLog){ // primary & secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   no                  0
		//    0      0      1      0   =>   no                  0
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   no                  0
		//    0      1      0      1   =>   yes filled below    2
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   yes filled below    2
		//    1      0      0      0   =>   no                  0
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   yes filled above    1
		//    1      0      1      1   =>   yes filled above    1
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled below    2
		//    1      1      1      0   =>   yes filled above    1
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 0, 0, 0,
			0, 2, 0, 2,
			0, 0, 1, 1,
			0, 2, 1, 0
		], buildLog);
	},
	difference: function(segments, buildLog){ // primary - secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   no                  0
		//    0      0      1      0   =>   no                  0
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   yes filled below    2
		//    0      1      1      1   =>   no                  0
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   yes filled above    1
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   no                  0
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled above    1
		//    1      1      1      0   =>   yes filled below    2
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 0, 0, 0,
			2, 0, 2, 0,
			1, 1, 0, 0,
			0, 1, 2, 0
		], buildLog);
	},
	differenceRev: function(segments, buildLog){ // secondary - primary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   no                  0
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   yes filled above    1
		//    0      1      1      1   =>   yes filled above    1
		//    1      0      0      0   =>   no                  0
		//    1      0      0      1   =>   yes filled below    2
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   yes filled below    2
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   no                  0
		//    1      1      1      0   =>   no                  0
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			0, 0, 1, 1,
			0, 2, 0, 2,
			0, 0, 0, 0
		], buildLog);
	},
	xor: function(segments, buildLog){ // primary ^ secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   yes filled above    1
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   yes filled below    2
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled above    1
		//    1      1      1      0   =>   yes filled below    2
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			2, 0, 0, 1,
			1, 0, 0, 2,
			0, 1, 2, 0
		], buildLog);
	}
};

module.exports = SegmentSelector;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ../assets/js/editor/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Panel_tile_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Panel/tile-selector */ "../assets/js/editor/panel/tile-selector.js");
/* harmony import */ var _panel_tile_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel/tile-panel */ "../assets/js/editor/panel/tile-panel.js");
/* harmony import */ var _panel_map_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/map-panel */ "../assets/js/editor/panel/map-panel.js");
/* harmony import */ var Panel_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Panel/world */ "../assets/js/editor/panel/world.js");
/* harmony import */ var _panel_map_selector_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel/map-selector-menu */ "../assets/js/editor/panel/map-selector-menu.js");
/* harmony import */ var _panel_general_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel/general-menu */ "../assets/js/editor/panel/general-menu.js");
/* harmony import */ var _panel_tool_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/tool-descriptor */ "../assets/js/editor/panel/tool-descriptor.js");
/* harmony import */ var Interact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Interact */ "../node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var Interact__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(Interact__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history */ "../assets/js/editor/history.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keys */ "../assets/js/editor/keys.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");


;












function dropdown () {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector(':scope > a')
    const content = dropdown.querySelector('.dropdown-content')
    button.addEventListener('click', event => {
      event.stopPropagation()
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show')
      })
      content.classList.add('show')
    })
    const contentLinks = dropdown.querySelectorAll('.dropdown-content a')
    contentLinks.forEach(contentLink => {
      contentLink.addEventListener('click', event => {
        button.textContent = contentLink.textContent
      })
    })
  })
  window.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.classList.remove('show')
    })
  })
}

async function loadEditor () {
  await _resource__WEBPACK_IMPORTED_MODULE_10__["default"].loadSprites()

  const panelsContainer = Interact__WEBPACK_IMPORTED_MODULE_11___default()('#panels-container')

  const tileSelectorPanel = new Panel_tile_selector__WEBPACK_IMPORTED_MODULE_0__["default"](
    document.querySelector('#tile-selector-panel'),
    document.querySelector('#panels-container .panel-body')
  )

  const tilePanel = new _panel_tile_panel__WEBPACK_IMPORTED_MODULE_1__.TilePanel(
    document.querySelector('#tile-panel'),
    document.querySelector('#panels-container .panel-body')
  )

  const mapPanel = new _panel_map_panel__WEBPACK_IMPORTED_MODULE_2__.MapPanel(
    document.querySelector('#map-panel'),
    document.querySelector('#panels-container .panel-body')
  )

  const toolDescriptor = new _panel_tool_descriptor__WEBPACK_IMPORTED_MODULE_6__["default"](document.querySelector('.tool-descriptor'))
  const generalMenu = new _panel_general_menu__WEBPACK_IMPORTED_MODULE_5__["default"](
    document.querySelector('[href="#importWorld (JSON)"]'),
    document.querySelector('[href="#importDefaultWorld (LOZ)"]'),
    document.querySelector('[href="#importWorld (LOZ)"]'),
    document.querySelector('[href="#exportWorld (JSON)"]'),
    document.querySelector('[href="#exportWorld (LOZ)"]'),
    document.querySelector('[href="#toggleBlock"]')
  )
  const mapSelectorMenu = new _panel_map_selector_menu__WEBPACK_IMPORTED_MODULE_4__["default"](
    document.querySelector('[href="#displayWorld"]'),
    document.querySelector('[href="#displayCaverns"]'),
    document.querySelector('[href="#displayLevel1"]'),
    document.querySelector('[href="#displayLevel2"]'),
    document.querySelector('[href="#displayLevel3"]'),
    document.querySelector('[href="#displayLevel4"]'),
    document.querySelector('[href="#displayLevel5"]'),
    document.querySelector('[href="#displayLevel6"]'),
    document.querySelector('[href="#displayLevel7"]'),
    document.querySelector('[href="#displayLevel8"]'),
    document.querySelector('[href="#displayLevel9"]')
  )
  const worldPanel = new Panel_world__WEBPACK_IMPORTED_MODULE_3__["default"](
    document.querySelector('#world-panel'),
    document.querySelector('#panels-container .panel-body')
  )

  const keys = new _keys__WEBPACK_IMPORTED_MODULE_8__["default"]()
  _history__WEBPACK_IMPORTED_MODULE_7__["default"].start()

  dropdown()
}

loadEditor()

})();

/******/ })()
;
//# sourceMappingURL=editor.js.map