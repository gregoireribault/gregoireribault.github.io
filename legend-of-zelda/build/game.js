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
/* harmony export */   SOUND_TEXT_SLOW: () => (/* binding */ SOUND_TEXT_SLOW),
/* harmony export */   SPRITE_HEIGHT: () => (/* binding */ SPRITE_HEIGHT),
/* harmony export */   SPRITE_LINK_PREFIX: () => (/* binding */ SPRITE_LINK_PREFIX),
/* harmony export */   SPRITE_TEXT_COLOR_RED: () => (/* binding */ SPRITE_TEXT_COLOR_RED),
/* harmony export */   SPRITE_TEXT_COLOR_WHITE: () => (/* binding */ SPRITE_TEXT_COLOR_WHITE),
/* harmony export */   SPRITE_TEXT_PREFIX: () => (/* binding */ SPRITE_TEXT_PREFIX),
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
const SOUND_TEXT_SLOW = 'text_slow'
const SPRITE_LINK_PREFIX = 'link'
const SPRITE_TEXT_PREFIX = 'text'
const SPRITE_TEXT_COLOR_RED = 'red'
const SPRITE_TEXT_COLOR_WHITE = 'white'
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

/***/ "../assets/js/game/debug.js":
/*!**********************************!*\
  !*** ../assets/js/game/debug.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debug: () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/io */ "../assets/js/utils/io.js");
/* harmony import */ var _utils_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/compression */ "../assets/js/utils/compression.js");


;



class Debug {
  game
  displayBlockingZones
  blockingZonesColor

  constructor (displayBlockingZonesCheckbox, blockingZonesColorInput, rupeesInput, rupeesSubmit, keysInput, keysSubmit, bombsInput, bombsSubmit, convertToLozInput) {
    const self = this
    displayBlockingZonesCheckbox.addEventListener('change', (e) => {
      e.preventDefault()
      self.displayBlockingZones = e.target.checked
    })
    displayBlockingZonesCheckbox.checked = false
    displayBlockingZonesCheckbox.dispatchEvent(new Event('change'))

    blockingZonesColorInput.addEventListener('change', (e) => {
      e.preventDefault()
      self.blockingZonesColor = e.target.value
    })
    blockingZonesColorInput.value = '#ff0000'
    blockingZonesColorInput.dispatchEvent(new Event('change'))

    rupeesSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      self.game.link.inventory.rupees = Math.min(Math.max(rupeesInput.value, 0), self.game.link.inventory.maxRupees)
      rupeesInput.value = undefined
    })
    keysSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      self.game.link.inventory.keys = Math.min(Math.max(keysInput.value, 0), self.game.link.inventory.maxKeys)
      keysInput.value = undefined
    })
    bombsSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      self.game.link.inventory.bombs = Math.min(Math.max(bombsInput.value, 0), self.game.link.inventory.maxBombs)
      bombsInput.value = undefined
    })
    convertToLozInput.addEventListener('click', async (e) => {
      e.preventDefault()
      const data = await _utils_io__WEBPACK_IMPORTED_MODULE_1__["default"].openFile()
      await _utils_io__WEBPACK_IMPORTED_MODULE_1__["default"].dowloadFile(data, _constant__WEBPACK_IMPORTED_MODULE_0__.FILE_TYPE_LOZ)
    })
  }

  setGame (game) {
    this.game = game
  }

  draw (context) {
    if (this.displayBlockingZones) {
      this.drawBlockingZones(context, this.blockingZonesColor)
    }
  }

  drawBlockingZones (context, color) {
    const map = this.game.map
    context.translate(0, _constant__WEBPACK_IMPORTED_MODULE_0__.GAME_TOP_MENU_HEIGHT) // Translate context for top menu
    context.translate(-map.x, -map.y)
    map.drawBlockingZones(context, color)
    if (this.game.nextMap) {
      this.game.nextMap.drawBlockingZones(context, color)
    }
    context.translate(map.x, map.y)
    context.translate(0, -_constant__WEBPACK_IMPORTED_MODULE_0__.GAME_TOP_MENU_HEIGHT)
  }
}




/***/ }),

/***/ "../assets/js/game/game.js":
/*!*********************************!*\
  !*** ../assets/js/game/game.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_transition_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/transition-manager */ "../assets/js/service/transition-manager.js");
/* harmony import */ var _model_top_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/top-menu */ "../assets/js/model/top-menu.js");
/* harmony import */ var _model_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/link */ "../assets/js/model/link.js");
/* harmony import */ var _service_input_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/input-manager */ "../assets/js/service/input-manager.js");
/* harmony import */ var _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/hitbox-manager */ "../assets/js/service/hitbox-manager.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _service_sound_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/sound-manager */ "../assets/js/service/sound-manager.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _service_world_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/world-manager */ "../assets/js/service/world-manager.js");
/* harmony import */ var _model_tile_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/tile-transition */ "../assets/js/model/tile-transition.js");
/* harmony import */ var _model_transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/transition */ "../assets/js/model/transition.js");


;
// import TopMenu from 'Model/top-menu'

// import Link from 'Model/link'



// import ItemManager from 'Manager/item'







class Game {
  constructor () {
    const startingPosition = _service_world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].findStartingPosition()
    if (!startingPosition) {
      throw new Error('No starting position found')
    }
    const map = startingPosition.map
    const link = new _model_link__WEBPACK_IMPORTED_MODULE_2__["default"](map.x + startingPosition.tileColumn * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH, map.y + startingPosition.tileLine * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT, _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH, _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT)

    this.topMenu = new _model_top_menu__WEBPACK_IMPORTED_MODULE_1__.TopMenu(link)
    this.topMenu.initializeMap(map)

    this.map = map
    this.nextMap = undefined

    this.link = link
    this.link.addEventListener(_model_link__WEBPACK_IMPORTED_MODULE_2__["default"].EVENT_ITEM_A_CHANGED, () => _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].enable(_service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_A))
    this.link.addEventListener(_model_link__WEBPACK_IMPORTED_MODULE_2__["default"].EVENT_ITEM_B_CHANGED, () => _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].enable(_service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_B))

    this.isStarted = false
    this.transitionPlaying = false
  }

  start () {
    this.map.hitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].computeMapHitboxV2(this.map)
    this.link.hitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].compute(this.link)

    _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].setMapping()
    _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].startDetection()
    _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].currentMappingName = _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].MAPPING_MAIN

    this.isStarted = true

    _service_sound_manager__WEBPACK_IMPORTED_MODULE_6__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_7__["default"].getSound('overworld'))

    // this.link.itemA = ItemManager.create(ItemManager.WOODEN_SWORD, 0, 0)
  }

  draw (context, x, y, width, height) {
    if (!this.isStarted) {
      return
    }

    context.clearRect(x, y, width, height)

    // Translate contexte to draw map behind top menu
    context.translate(0, _constant__WEBPACK_IMPORTED_MODULE_5__.GAME_TOP_MENU_HEIGHT)

    context.translate(-this.map.x, -this.map.y)
    this.map.draw(context)
    if (this.nextMap) {
      this.nextMap.draw(context)
    }
    this.link.draw(context, 0, 0, this.getLinkActionFromInput(_service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentDrawingAction()))
    context.translate(this.map.x, this.map.y)

    context.translate(0, -_constant__WEBPACK_IMPORTED_MODULE_5__.GAME_TOP_MENU_HEIGHT)
    this.topMenu.draw(context)
  }

  async process () {
    if (!this.isStarted) {
      return
    }

    if (this.transitionPlaying) {
      return
    }

    // Process transitions
    const linkTile = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].getLinkTile(this.map, this.link)
    if (linkTile && linkTile !== this.link.tile) {
      linkTile.tileTransition.enabled = true
    }
    this.link.tile = linkTile
    const linkFrontTile = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].getLinkFrontTile(this.map, this.link)
    let tileTransition
    if (this.link.tile && !linkFrontTile) {
      tileTransition = this.createDynamicMapDragTileTransition()
    }
    if (this.link.tile && linkFrontTile) {
      tileTransition = this.link.tile.tileTransition
    }
    if (tileTransition && tileTransition.enabled && tileTransition.start) {
      this.transitionPlaying = true
      this.link.resetActions()
      this.nextMap = tileTransition.getTargetMap()
      const transitionStart = _service_transition_manager__WEBPACK_IMPORTED_MODULE_0__["default"].get(tileTransition.start)
      if (transitionStart) {
        await transitionStart.play(this.link, this.map, this.nextMap)
      }
      this.map = tileTransition.getTargetMap()
      this.nextMap = undefined
      this.map.hitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].computeMapHitboxV2(this.map)
      this.link.x = tileTransition.getTargetPosition().x
      this.link.y = tileTransition.getTargetPosition().y
      const transitionEnd = _service_transition_manager__WEBPACK_IMPORTED_MODULE_0__["default"].get(tileTransition.end)
      if (transitionEnd) {
        await transitionEnd.play(this.link)
      }
      this.link.tile = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_4__["default"].getLinkTile(this.map, this.link)
      this.link.tile.tileTransition.enabled = false
      this.transitionPlaying = false
      tileTransition.enabled = false
      return
    }

    // Process link
    this.processLinkActions()
  }

  createDynamicMapDragTileTransition () {
    let targetMapColumn
    let targetMapLine
    let targetTileColumn
    let targetTileLine
    if (this.link.direction === _constant__WEBPACK_IMPORTED_MODULE_5__.DIRECTION_EAST) {
      targetMapColumn = this.map.column + 1
      targetMapLine = this.map.line
      targetTileColumn = 0
      targetTileLine = (this.link.y % (_constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_COLUMN * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT)) / _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT
    }
    if (this.link.direction === _constant__WEBPACK_IMPORTED_MODULE_5__.DIRECTION_NORTH) {
      targetMapColumn = this.map.column
      targetMapLine = this.map.line - 1
      targetTileColumn = (this.link.x % (_constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_LINE * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH)) / _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH
      targetTileLine = _constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_COLUMN - 1
    }
    if (this.link.direction === _constant__WEBPACK_IMPORTED_MODULE_5__.DIRECTION_SOUTH) {
      targetMapColumn = this.map.column
      targetMapLine = this.map.line + 1
      targetTileColumn = (this.link.x % (_constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_LINE * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH)) / _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_WIDTH
      targetTileLine = 0
    }
    if (this.link.direction === _constant__WEBPACK_IMPORTED_MODULE_5__.DIRECTION_WEST) {
      targetMapColumn = this.map.column - 1
      targetMapLine = this.map.line
      targetTileColumn = _constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_LINE - 1
      targetTileLine = (this.link.y % (_constant__WEBPACK_IMPORTED_MODULE_5__.TILES_PER_COLUMN * _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT)) / _constant__WEBPACK_IMPORTED_MODULE_5__.TILE_HEIGHT
    }
    return new _model_tile_transition__WEBPACK_IMPORTED_MODULE_9__.TileTransition(_model_transition__WEBPACK_IMPORTED_MODULE_10__.MapDrag.name, this.map.type, targetMapColumn, targetMapLine, targetTileColumn, targetTileLine)
  }

  processLinkActions () {
    let mustWalk = false
    const linkMoves = [_service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_EAST, _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_NORTH, _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_SOUTH, _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_WEST]
    for (let i = 0; i < linkMoves.length; i++) {
      if (this.link.hasAction(linkMoves[i])) {
        mustWalk = true
      }
    }

    if (mustWalk) {
      this.link.startWalking()
    } else {
      this.link.stopWalking()
    }

    if (this.link.actions.length === 0) {
      this.link.action = _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_ACTION_MOVE
    } else {
      for (let i = 0; i < this.link.actions.length; i++) {
        this.processAction(this.link.actions[i])
      }
    }
  }

  getLinkActionFromInput (inputAction) {
    switch (inputAction) {
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_EAST:
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_NORTH:
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_SOUTH:
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_WEST:
        return _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_ACTION_MOVE
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_A:
        return _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_ACTION_USE_ITEM_A
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_B:
        return _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_ACTION_USE_ITEM_B
      default:
        return _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_ACTION_MOVE
    }
  }

  processAction (action) {
    switch (action) {
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_EAST:
        this.link.move(this.map, _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_DIRECTION_EAST)
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_NORTH:
        this.link.move(this.map, _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_DIRECTION_NORTH)
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_SOUTH:
        this.link.move(this.map, _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_DIRECTION_SOUTH)
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_MOVE_WEST:
        this.link.move(this.map, _constant__WEBPACK_IMPORTED_MODULE_5__.LINK_DIRECTION_WEST)
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_A:
        this.link.useItemA()
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_LINK_USE_ITEM_B:
        this.link.useItemB()
        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_CLOSE:

        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_MOVE_BOTTOM:

        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_MOVE_LEFT:

        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_MOVE_RIGHT:

        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_MOVE_TOP:

        break
      case _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MENU_OPEN:

        break
    }

    this.link.removeAction(action)
  }

  processInput () {
    if (!this.isStarted) {
      return
    }

    if (this.transitionPlaying) {
      return
    }

    /* if (ItemManager.isItemPlaying()) {
      return
    } */

    const action = _service_input_manager__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentAction()
    if (action) {
      this.link.addAction(action)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "../assets/js/game/index.js":
/*!**********************************!*\
  !*** ../assets/js/game/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "../assets/js/game/game.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "../assets/js/game/debug.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/io */ "../assets/js/utils/io.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _service_sound_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sound-manager */ "../assets/js/service/sound-manager.js");
/* harmony import */ var _service_world_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/world-manager */ "../assets/js/service/world-manager.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;







let game
let debug
let drawInterval
let processInterval
let processInputInterval
const canvas = document.querySelector('#loz-canvas')
const context = canvas.getContext('2d')

canvas.width = _constant__WEBPACK_IMPORTED_MODULE_6__.TILES_PER_LINE * _constant__WEBPACK_IMPORTED_MODULE_6__.TILE_WIDTH
canvas.height = _constant__WEBPACK_IMPORTED_MODULE_6__.TILES_PER_COLUMN * _constant__WEBPACK_IMPORTED_MODULE_6__.TILE_HEIGHT + _constant__WEBPACK_IMPORTED_MODULE_6__.GAME_TOP_MENU_HEIGHT
canvas.onload = () => { canvas.focus() }

debug = new _debug__WEBPACK_IMPORTED_MODULE_1__.Debug(
  document.querySelector('input#control-blocking-zones'),
  document.querySelector('input#control-blocking-zones-color'),
  document.querySelector('input#control-rupees'),
  document.querySelector('input#control-rupees-submit'),
  document.querySelector('input#control-keys'),
  document.querySelector('input#control-keys-submit'),
  document.querySelector('input#control-bombs'),
  document.querySelector('input#control-bombs-submit'),
  document.querySelector('input#control-convert-file-to-loz')
)
_service_sound_manager__WEBPACK_IMPORTED_MODULE_4__["default"].initContext()
_service_sound_manager__WEBPACK_IMPORTED_MODULE_4__["default"].initEvents(document.querySelector('input#play-sounds'), document.querySelector('input#control-volume'))
await _resource__WEBPACK_IMPORTED_MODULE_3__["default"].loadAll()

async function loadGame (gameData) {
  _service_world_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createMaps(gameData)

  game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]()
  debug.setGame(game)

  clearInterval(drawInterval)
  drawInterval = setInterval(() => {
    game.draw(context, 0, 0, canvas.width, canvas.height)
    debug.draw(context, 0, 0, canvas.width, canvas.height)
  }, _constant__WEBPACK_IMPORTED_MODULE_6__.GAME_INTERVAL_DRAWING)
  clearInterval(processInterval)
  processInterval = setInterval(() => game.process(), _constant__WEBPACK_IMPORTED_MODULE_6__.GAME_INTERVAL_PROCESS)
  clearInterval(processInputInterval)
  processInputInterval = setInterval(() => game.processInput(), _constant__WEBPACK_IMPORTED_MODULE_6__.GAME_INTERVAL_INPUT)

  game.start()
}

const gameData = await _utils_io__WEBPACK_IMPORTED_MODULE_2__["default"].fetchRemoteFile(_constant__WEBPACK_IMPORTED_MODULE_6__.PATH_DATA_GAME)
await loadGame(gameData)

document.querySelector('input#control-import-game').addEventListener('click', async (e) => {
  e.preventDefault()
  const gameData = await _utils_io__WEBPACK_IMPORTED_MODULE_2__["default"].openFile(_constant__WEBPACK_IMPORTED_MODULE_6__.FILE_TYPE_LOZ)
  loadGame(gameData)
})

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "../assets/js/model/inventory.js":
/*!***************************************!*\
  !*** ../assets/js/model/inventory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inventory: () => (/* binding */ Inventory)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;

class Inventory {
  constructor () {
    this.shield = _constant__WEBPACK_IMPORTED_MODULE_0__.ITEM_SHIELD_NORMAL
    this.ring = _constant__WEBPACK_IMPORTED_MODULE_0__.ITEM_RING_GREEN
    this.arrow = undefined
    this.bookOfMagic = undefined
    this.ladder = undefined
    this.magicalKey = undefined
    this.powerBracelet = undefined

    this.rupees = 0
    this.keys = 0
    this.bombs = 0
    this.maxRupees = 255
    this.maxKeys = 8
    this.maxBombs = 8
  }
}




/***/ }),

/***/ "../assets/js/model/link.js":
/*!**********************************!*\
  !*** ../assets/js/model/link.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/hitbox-manager */ "../assets/js/service/hitbox-manager.js");
/* harmony import */ var _service_sound_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/sound-manager */ "../assets/js/service/sound-manager.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory */ "../assets/js/model/inventory.js");


;





const EVENT_ITEM_A_CHANGED = 'item_a_changed'
const EVENT_ITEM_B_CHANGED = 'item_b_changed'

const SPRITE_WIDTH = 32
const SPRITE_HEIGHT = 32

const HITBOX_DELTA = 2
const SPEED = 10 // Speed depends on game processing interval

class Link extends EventTarget {
  constructor (x, y, width, height) {
    super()

    this.x = x
    this.y = y
    this.width = SPRITE_WIDTH
    this.height = SPRITE_HEIGHT

    this.speed = SPEED
    this.action = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_MOVE
    this.direction = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_SOUTH
    this.clipX = 0
    this.clipY = 0

    this.inventory = new _inventory__WEBPACK_IMPORTED_MODULE_4__.Inventory()

    this.totalLife = 3
    this.currentLife = 3

    this.items = []
    this._itemA = undefined
    this._itemB = undefined

    this.actions = []
  }

  canAfford (item) {
    return item.price === undefined || this.rupees >= item.price
  }

  buy (item) {
    if (item.price !== undefined) {
      let i = item.price
      const link = this
      const soundInteval = setInterval(() => {
        _service_sound_manager__WEBPACK_IMPORTED_MODULE_1__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_2__["default"].getSound(_constant__WEBPACK_IMPORTED_MODULE_3__.SOUND_GET_RUPEE))
      }, 200)
      var buyInterval = setInterval(() => {
        i--
        link.rupees--
        if (i === 0) {
          clearInterval(buyInterval)
          clearInterval(soundInteval)
          if (link.rupees < 0) {
            link.rupee = 0
          }
        }
      }, 25)
    }
  }

  useItemA () {
    if (this.itemA !== undefined) {
      this.itemA.use()
    }
  }

  useItemB () {
    if (this.itemB !== undefined) {
      this.itemB.use()
    }
  }

  getHitbox (x, y) {
    x = x || this.x
    y = y || this.y

    return {
      x: x + HITBOX_DELTA,
      y: y + (this.height / 2) + HITBOX_DELTA,
      width: this.width - 2 * HITBOX_DELTA,
      height: (this.height / 2) - 2 * HITBOX_DELTA
    }
  }

  move (map, direction) {
    let targetX = this.x
    let targetY = this.y
    let targetHitbox
    let collision

    switch (direction) {
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_EAST:
        this.direction = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_EAST
        targetX += this.speed
        targetHitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].compute(this.getHitbox(targetX, targetY))
        collision = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].computeHitboxesCollision(map.hitbox, targetHitbox)
        if (collision) {
          targetX = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getMinX(collision) - this.width
        }
        this.x = targetX
        break
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_NORTH:
        this.direction = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_NORTH
        targetY -= this.speed
        targetHitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].compute(this.getHitbox(targetX, targetY))
        collision = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].computeHitboxesCollision(map.hitbox, targetHitbox)
        if (collision) {
          targetY = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getMaxY(collision) - (this.height / 2)
        }
        this.y = targetY
        break
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_SOUTH:
        this.direction = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_SOUTH
        targetY += this.speed
        targetHitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].compute(this.getHitbox(targetX, targetY))
        collision = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].computeHitboxesCollision(map.hitbox, targetHitbox)
        if (collision) {
          targetY = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getMinY(collision) - this.height
        }
        this.y = targetY
        break
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_WEST:
        this.direction = _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_DIRECTION_WEST
        targetX -= this.speed
        targetHitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].compute(this.getHitbox(targetX, targetY))
        collision = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].computeHitboxesCollision(map.hitbox, targetHitbox)
        if (collision) {
          targetX = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getMaxX(collision)
        }
        this.x = targetX
        break
    }

    this.hitbox = _service_hitbox_manager__WEBPACK_IMPORTED_MODULE_0__["default"].compute(this)
  }

  startWalking () {
    const sprite = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].getSprite(`${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.direction}_${this.inventory.shield}_${this.action}`)
    if (!sprite) {
      console.log(`${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.direction}_${this.inventory.shield}_${this.action}`)
      return
    }
    sprite.start()
  }

  stopWalking () {
    const sprite = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].getSprite(`${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.direction}_${this.inventory.shield}_${this.action}`)
    if (!sprite) {
      console.log(`${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.direction}_${this.inventory.shield}_${this.action}`)
      return
    }
    sprite.stop()
  }

  drawSword (context, offsetX, offsetY) {
    context.save()
    const itemWidth = this.itemA.sprite.width
    const itemHeight = this.itemA.sprite.height
    const linkX = offsetX + this.x + this.clipX
    const linkY = offsetY + this.y + this.clipY
    const linkWidth = this.width - this.clipX
    const linkHeight = this.height - this.clipY
    context.setTransform(1, 0, 0, 1, linkX + linkWidth / 2, linkY + linkHeight / 2)
    let deltaX = 0
    const deltaY = -3 / 4 * linkHeight
    if (this.direction === DIRECTION_EAST) {
      context.rotate(90 * Math.PI / 180)
      deltaX = 1 / 8 * linkWidth
    }
    if (this.direction === DIRECTION_SOUTH) {
      context.rotate(180 * Math.PI / 180)
    }
    if (this.direction === DIRECTION_WEST) {
      context.rotate(-90 * Math.PI / 180)
      deltaX = -1 / 8 * linkWidth
    }
    if (this.direction === DIRECTION_NORTH) {
    }
    this.itemA.sprite.draw(context, 0, 0, itemWidth, itemHeight, -linkWidth / 2 + deltaX, -linkHeight / 2 + deltaY, itemWidth, itemHeight)
    context.restore()
  }

  draw (context, offsetX, offsetY, drawingAction) {
    if (drawingAction === _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_USE_ITEM_A) {
      this.drawSword(context, offsetX, offsetY)
    }

    const spriteName = this.getSpriteName(drawingAction)
    const sprite = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].getSprite(spriteName)
    if (!sprite) {
      console.log(spriteName)
      return
    }
    _resource__WEBPACK_IMPORTED_MODULE_2__["default"].getSprite(spriteName).draw(
      context,
      0, 0, this.width - this.clipX, this.height - this.clipY,
      offsetX + this.x + this.clipX, offsetY + this.y + this.clipY, this.width - this.clipX, this.height - this.clipY
    )
  }

  getSpriteName (action) {
    switch (action) {
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_PICK:
        return `${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${_constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_PICK}`
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_USE_ITEM_A:
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_USE_ITEM_B:
        return `${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.shield}_${_constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_PICK}`
      case _constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_MOVE:
        return `${_constant__WEBPACK_IMPORTED_MODULE_3__.SPRITE_LINK_PREFIX}_${this.inventory.ring}_${this.direction}_${this.inventory.shield}_${_constant__WEBPACK_IMPORTED_MODULE_3__.LINK_ACTION_MOVE}`
    }
  }

  addItem (item) {
    this.items.push(item)
  }

  removeItem (item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].constructor.name === item.name) {
        this.items.splice(i, 1)
      }
    }
  }

  hasItem (item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].constructor.name === item.name) {
        return true
      }
    }

    return false
  }

  addAction (action) {
    if (this.actions.indexOf(action) === -1) {
      this.actions.push(action)
    }
  }

  hasAction (action) {
    return this.actions.indexOf(action) > -1
  }

  removeAction (action) {
    const index = this.actions.indexOf(action)
    if (index > -1) {
      this.actions.splice(index, 1)
    }
  }

  resetActions () {
    this.actions = []
  }

  get itemA () {
    return this._itemA
  }

  set itemA (item) {
    this._itemA = item
    this.dispatchEvent(new Event(EVENT_ITEM_A_CHANGED))
  }

  get itemB () {
    return this._itemB
  }

  set itemB (item) {
    this._itemB = item
    this.dispatchEvent(new Event(EVENT_ITEM_B_CHANGED))
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


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
  constructor (column, line, x, y, width, height, type, tiles, creatures, items, characters, miscs) {
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
    this.creatures = creatures
    this.items = items
    this.characters = characters
    this.miscs = miscs

    this.savedItems = []
    this.savedCharacters = []
  }

  draw (context) {
    context.save()
    context.translate(this.offsetX, this.offsetY)
    const tileOffsetX = this.x
    const tileOffsetY = this.y

    for (const tile of this.tilesIterator()) {
      tile.draw(context)
    }

    for (let i = 0; i < this.miscs.length; i++) {
      this.miscs[i].draw(context, tileOffsetX, tileOffsetY)
    }

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].draw(context, tileOffsetX, tileOffsetY)
    }

    for (let i = 0; i < this.characters.length; i++) {
      this.characters[i].draw(context, tileOffsetX, tileOffsetY)
    }
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

  init () {

  }

  reset () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].resetable === true) {
        this.items[i].reset()
      }
    }

    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].resetable === true) {
        this.characters[i].reset()
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
    this.source.stop(0)
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

/***/ "../assets/js/model/top-menu.js":
/*!**************************************!*\
  !*** ../assets/js/model/top-menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopMenu: () => (/* binding */ TopMenu)
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");
/* harmony import */ var _service_text_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/text-manager */ "../assets/js/service/text-manager.js");


;



const SPRITE_WIDTH = 16
const SPRITE_HEIGHT = 16

const MAP_WIDTH = 128
const MAP_HEIGTH = 64

class TopMenu {
  constructor (link) {
    this.link = link

    this.map = undefined
    this.mapLocationWidth = undefined
    this.mapLocationHeight = undefined
  }

  initializeMap (map) {
    this.map = map

    /* const offsetBounds = WorldManager.getOffsetBoundsFromCategory(map.type)
    this.mapLocationWidth = MAP_WIDTH / (offsetBounds.maxX - offsetBounds.minX + 1)
    this.mapLocationHeight = MAP_HEIGTH / (offsetBounds.maxY - offsetBounds.minY + 1) */
  }

  draw (context) {
    // Background
    context.fillStyle = 'black'
    context.fillRect(0, 0, 512, 96)

    // Map
    context.fillStyle = 'grey'
    context.fillRect(16, 16, MAP_WIDTH, MAP_HEIGTH)
    if (this.map && this.mapLocationWidth && this.mapLocationHeight) {
      const savedFillStyle = context.fillStyle
      context.fillStyle = 'green'
		    context.fillRect(
        this.map.offsetX * this.mapLocationWidth + 16,
        this.map.offsetY * this.mapLocationHeight + 16,
        this.mapLocationWidth,
        this.mapLocationHeight
      )
      context.fillStyle = savedFillStyle
    }

    // Rupees
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_rupee').draw(context, 160, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, 'x' + this.link.inventory.rupees, _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_WHITE, 176, 16, 32, 16, SPRITE_WIDTH, SPRITE_HEIGHT)

    // Keys
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_key').draw(context, 160, 48, SPRITE_WIDTH, SPRITE_HEIGHT)
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, 'x' + this.link.inventory.keys, _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_WHITE, 176, 48, 32, 16, SPRITE_WIDTH, SPRITE_HEIGHT)

    // Bombs
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_bomb').draw(context, 160, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, 'x' + this.link.inventory.bombs, _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_WHITE, 176, 64, 32, 16, SPRITE_WIDTH, SPRITE_HEIGHT)

    // Item B
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_north_west').draw(context, 256, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 256, 32, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 256, 48, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_south_west').draw(context, 256, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_horizontal').draw(context, 272, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_south_east').draw(context, 288, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 288, 48, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 288, 32, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_north_east').draw(context, 288, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, 'b', _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_WHITE, 272, 16, 16, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    if (this.link.itemB !== undefined) {
      this.link.itemB.draw(context, 256 + 8, 16 + 16)
    }

    // Item A
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_north_west').draw(context, 256 + 48, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 256 + 48, 32, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 256 + 48, 48, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_south_west').draw(context, 256 + 48, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_horizontal').draw(context, 272 + 48, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_south_east').draw(context, 288 + 48, 64, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 288 + 48, 48, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_vertical').draw(context, 288 + 48, 32, SPRITE_WIDTH, SPRITE_HEIGHT)
    _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_blue_line_corner_north_east').draw(context, 288 + 48, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, 'a', _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_WHITE, 272 + 48, 16, 16, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    if (this.link.itemA !== undefined) {
      this.link.itemA.draw(context, 256 + 48 + 8, 16 + 16)
    }

    // Life
    _service_text_manager__WEBPACK_IMPORTED_MODULE_2__["default"].draw(context, '-life-', _constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_COLOR_RED, 384, 16, 96, 16, SPRITE_WIDTH, SPRITE_HEIGHT)
    let x = 368
    let y = 64
    for (let i = 0; i < this.link.totalLife; i++) {
      if (i < Math.floor(this.link.currentLife + 0.25)) {
        _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_heart_full').draw(context, x, y, SPRITE_WIDTH, SPRITE_HEIGHT)
      } else if (i < this.currentLife) {
        _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_heart_half').draw(context, x, y, SPRITE_WIDTH, SPRITE_HEIGHT)
      } else {
        _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite('menu_heart_empty').draw(context, x, y, SPRITE_WIDTH, SPRITE_HEIGHT)
      }

      x += SPRITE_WIDTH
      if (i === 7) {
        y -= SPRITE_HEIGHT
        x = 368
      }
    }
  }
}




/***/ }),

/***/ "../assets/js/model/transition.js":
/*!****************************************!*\
  !*** ../assets/js/model/transition.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaveEntrance: () => (/* binding */ CaveEntrance),
/* harmony export */   CaveExit: () => (/* binding */ CaveExit),
/* harmony export */   CaveStairsDown: () => (/* binding */ CaveStairsDown),
/* harmony export */   CaveStairsUp: () => (/* binding */ CaveStairsUp),
/* harmony export */   MapDrag: () => (/* binding */ MapDrag)
/* harmony export */ });
/* harmony import */ var _service_sound_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/sound-manager */ "../assets/js/service/sound-manager.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource */ "../assets/js/resource.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;



class CaveEntrance {
  async play (link) {
    return new Promise((resolve) => {
      link.y += _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT
      const limitY = link.y - 3 * _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT
      const transitionInterval = setInterval(() => {
        link.startWalking()
        link.y -= 2
        if (link.y <= limitY) {
          clearInterval(transitionInterval)
          link.stopWalking()
          resolve()
        }
      }, 15)
    })
  }

  static get name () {
    return _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_CAVE_ENTRANCE
  }
}

class CaveExit {
  async play (link, currentMap) {
    return new Promise((resolve) => {
      const transitionInterval = setInterval(() => {
        link.startWalking()
        link.y += 2
        if (link.y > currentMap.y + currentMap.height) {
          clearInterval(transitionInterval)
          link.stopWalking()
          resolve()
        }
      }, 15)
    })
  }

  static get name () {
    return _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_CAVE_EXIT
  }
}

class CaveStairsDown {
  async play (link) {
    return new Promise((resolve) => {
      _service_sound_manager__WEBPACK_IMPORTED_MODULE_0__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_1__["default"].getSound(_constant__WEBPACK_IMPORTED_MODULE_2__.SOUND_STAIRS))
      link.direction = _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_NORTH
      link.x = link.tile.x
      link.y = link.tile.y
      link.clipY = 0
      link.startWalking()
      const transitionInterval = setInterval(() => {
        link.clipY++
        if (link.clipY >= _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT) {
          clearInterval(transitionInterval)
          link.clipY = 0
          link.stopWalking()
          resolve()
        }
      }, 30)
    })
  }

  static get name () {
    return _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_CAVE_STAIRS_DOWN
  }
}

class CaveStairsUp {
  return
  async play (link) {
    return new Promise((resolve) => {
      _service_sound_manager__WEBPACK_IMPORTED_MODULE_0__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_1__["default"].getSound(_constant__WEBPACK_IMPORTED_MODULE_2__.SOUND_STAIRS))
      link.direction = _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_SOUTH
      link.clipY = _constant__WEBPACK_IMPORTED_MODULE_2__.TILE_HEIGHT
      link.startWalking()
      const transitionInterval = setInterval(() => {
        link.clipY--
        if (link.clipY <= 0) {
          clearInterval(transitionInterval)
          link.clipY = 0
          link.stopWalking()
          resolve()
        }
      }, 30)
    })
  }

  static get name () {
    return _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_CAVE_STAIRS_UP
  }
}

class MapDrag {
  async play (link, currentMap, targetMap) {
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_EAST) {
      return this.playEast(link, currentMap, targetMap)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_NORTH) {
      return this.playNorth(link, currentMap, targetMap)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_SOUTH) {
      return this.playSouth(link, currentMap, targetMap)
    }
    if (link.direction === _constant__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_WEST) {
      return this.playWest(link, currentMap, targetMap)
    }
  }

  playEast (link, currentMap, targetMap) {
    currentMap.offsetX = 0
    targetMap.offsetX = 0
    link.x = currentMap.x + currentMap.width - link.width

    const nbTicks = Math.round(targetMap.width / _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA)
    const linkIncrementDelta = (targetMap.width - link.width) / nbTicks

    return new Promise((resolve) => {
      const transitionInterval = setInterval(() => {
        link.startWalking()
        currentMap.offsetX -= _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        targetMap.offsetX -= _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        link.x -= linkIncrementDelta
        if (currentMap.offsetX < -currentMap.width && targetMap.offsetX < -targetMap.width) {
          clearInterval(transitionInterval)

          targetMap.offsetX = 0
          link.stopWalking()
          link.x = targetMap.x
          currentMap.offsetX = 0

          resolve()
        }
      }, _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INTERVAL_PLAY)
    })
  }

  playNorth (link, currentMap, targetMap) {
    currentMap.offsetY = 0
    targetMap.offsetY = 0
    link.y = currentMap.y

    const nbTicks = Math.round(targetMap.height / _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA)
    const linkIncrementDelta = (targetMap.height - link.height) / nbTicks

    return new Promise((resolve) => {
      const transitionInterval = setInterval(() => {
        link.startWalking()
        currentMap.offsetY += _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        targetMap.offsetY += _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        link.y += linkIncrementDelta
        if (currentMap.offsetY > currentMap.height && targetMap.offsetY > targetMap.height) {
          clearInterval(transitionInterval)

          targetMap.offsetY = 0
          link.stopWalking()
          link.y = targetMap.y + targetMap.height - link.height
          currentMap.offsetY = 0

          resolve()
        }
      }, _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INTERVAL_PLAY)
    })
  }

  playSouth (link, currentMap, targetMap) {
    currentMap.offsetY = 0
    targetMap.offsetY = 0
    link.y = currentMap.y + currentMap.height - link.height

    const nbTicks = Math.round(targetMap.height / _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA)
    const linkIncrementDelta = (targetMap.height - link.height) / nbTicks

    return new Promise((resolve) => {
      const transitionInterval = setInterval(() => {
        link.startWalking()
        currentMap.offsetY -= _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        targetMap.offsetY -= _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        link.y -= linkIncrementDelta
        if (currentMap.offsetY < -currentMap.height && targetMap.offsetY < -targetMap.height) {
          clearInterval(transitionInterval)

          targetMap.offsetY = 0
          link.stopWalking()
          link.y = targetMap.y
          currentMap.offsetY = 0

          resolve()
        }
      }, _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INTERVAL_PLAY)
    })
  }

  playWest (link, currentMap, targetMap) {
    currentMap.offsetX = 0
    targetMap.offsetX = 0
    link.x = currentMap.x

    const nbTicks = Math.round(targetMap.width / _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA)
    const linkIncrementDelta = (targetMap.width - link.width) / nbTicks

    return new Promise((resolve) => {
      const transitionInterval = setInterval(() => {
        link.startWalking()
        currentMap.offsetX += _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        targetMap.offsetX += _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INCREMENT_DELTA
        link.x += linkIncrementDelta
        if (currentMap.offsetX > currentMap.width && targetMap.offsetX > targetMap.width) {
          clearInterval(transitionInterval)

          targetMap.offsetX = 0
          link.stopWalking()
          link.x = targetMap.x + targetMap.width - link.width
          currentMap.offsetX = 0

          resolve()
        }
      }, _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_INTERVAL_PLAY)
    })
  }

  static get name () {
    return _constant__WEBPACK_IMPORTED_MODULE_2__.TRANSITION_MAP_DRAG
  }
}

class ItemPicking {
  constructor () {
    this.item = undefined
    this.character = undefined
  }

  shouldBePlayed (map, link) {
    for (let i = 0; i < map.items.length; i++) {
      const item = map.items[i]
      if (item.enabled && item.shouldBePickedBy(link) && link.canAfford(item) && item.canBePickedBy(link)) {
        this.item = item
        return true
      }
    }

    for (let i = 0; i < map.characters.length; i++) {
      const character = map.characters[i]
      if (!character.items || !character.enabled) {
        continue
      }
      for (let j = 0; j < character.items.length; j++) {
        const item = character.items[j]
        if (item.enabled && item.shouldBePickedBy(link) && link.canAfford(item) && item.canBePickedBy(link)) {
          this.item = item
          this.character = character
          return true
        }
      }
    }

    return false
  }

  play (map, link) {
    if (!this.item.pick) {
      return new Promise((resolve) => resolve())
    }

    this.isPlaying = true
    link.stopWalking()

    const clone = this.item.clone()
    clone.price = undefined
    map.items.push(clone)
    this.item.picked()

    const itemSavedX = clone.x
    const itemSavedY = clone.y
    const itemCenterX = HitboxManager.getHorizontalCenter(clone.hitbox)
    const itemDeltaX = itemCenterX - clone.x
    clone.x = link.x - itemDeltaX + 4
    clone.y = link.y - clone.height

    link.action = Link.ACTION_PICK
    link.buy(this.item)
    this.item.pickedBy(link)
    _service_sound_manager__WEBPACK_IMPORTED_MODULE_0__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_1__["default"].getSound(SOUND_FANFARE))
    this.character.disappearing = true

    const itemPicking = this
    return new Promise((resolve) => {
      const characterInterval = setInterval(() => {
        if (itemPicking.character) {
          itemPicking.character.visible = !itemPicking.character.visible
        }
      }, 1)

      setTimeout(() => {
        link.action = Link.ACTION_MOVE
        clone.x = itemSavedX
        clone.y = itemSavedY

        map.items.pop()

        clearInterval(characterInterval)

        itemPicking.character.itemPicked(itemPicking.item)
        itemPicking.isPlaying = false
        itemPicking.item = undefined
        itemPicking.character = undefined

        resolve()
      }, 1100)
    })
  }

  static get NAME () {
    return ITEM_PICKING_NAME
  }
}

class Dialog {
  constructor () {
    this.dialog = undefined
  }

  getNextMap (map) {
    return undefined
  }

  shouldBePlayed (map, link) {
    for (let i = 0; i < map.characters.length; i++) {
      const character = map.characters[i]
      if (character !== undefined && character.dialog !== undefined && !character.dialog.isCompleted()) {
        this.dialog = character.dialog
        return true
      }
    }

    return false
  }

  async playBeforeMapChange (map, nextMap, link) {
    const characters = this.dialog.characters
    let index = 0

    return new Promise((resolve) => {
      var transitionInterval = setInterval(() => {
        characters[index].visible = true
        _service_sound_manager__WEBPACK_IMPORTED_MODULE_0__["default"].play(_resource__WEBPACK_IMPORTED_MODULE_1__["default"].getSound(SOUND_TEXT))
        index++
        if (index >= characters.length) {
          clearInterval(transitionInterval)
          resolve()
        }
      }, 100)
    })
  }

  async playAfterMapChange (map, link) {
    return new Promise((resolve) => resolve())
  }

  static get NAME () {
    return DIALOG_NAME
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
    let offset = 0
    for (let i = 0; i < dataSounds.length; i++) {
      const dataSound = dataSounds[i]
      const bytes = dataSound.bytes
      const arrayBuffer = audioSounds.slice(offset, offset + bytes)
      const audioBuffer = await context.decodeAudioData(arrayBuffer)
      const name = dataSound.name
      const duration = dataSound.duration || undefined
      const loop = dataSound.loop || false
      const loopEnd = dataSound.loop_end || 0
      const loopStart = dataSound.loop_start || 0
      sounds[name] = new _model_resource_sound__WEBPACK_IMPORTED_MODULE_4__.Sound(name, audioBuffer, context, gainNode, duration, loop, loopStart, loopEnd)
      offset += bytes
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

/***/ "../assets/js/service/input-manager.js":
/*!*********************************************!*\
  !*** ../assets/js/service/input-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "../assets/js/constant.js");


;

const BLOCKING_ACTION = true
const ENABLED = true

class Key {
  constructor (key, action, blockingAction, enabled) {
    this.key = key
    this.action = action
    this.blockingAction = blockingAction
    this.enabled = enabled

    this.pressed = false
    this.used = false
  }

  use () {
    this.used = true

    return this.action
  }

  disable () {
    this.enabled = false
  }

  enable () {
    this.enabled = true
  }

  unuse () {
    this.used = false

    return this.action
  }

  press () {
    this.pressed = true
  }

  unpress () {
    this.pressed = false
  }

  static get BLOCKING_ACTION () {
    return BLOCKING_ACTION
  }

  static get ENABLED () {
    return ENABLED
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

  ACTION_LINK_MOVE_WEST: 'link_move_west',
  ACTION_LINK_MOVE_NORTH: 'link_move_north',
  ACTION_LINK_MOVE_EAST: 'link_move_east',
  ACTION_LINK_MOVE_SOUTH: 'link_move_south',
  ACTION_LINK_USE_ITEM_A: 'link_use_item_a',
  ACTION_LINK_USE_ITEM_B: 'link_use_item_b',
  ACTION_MENU_CLOSE: 'menu_close',
  ACTION_MENU_MOVE_LEFT: 'menu_move_left',
  ACTION_MENU_MOVE_TOP: 'menu_move_top',
  ACTION_MENU_MOVE_RIGHT: 'menu_move_right',
  ACTION_MENU_MOVE_BOTTOM: 'menu_move_bottom',
  ACTION_MENU_OPEN: 'menu_open',

  MAPPING_MAIN: 'mapping_main',
  MAPPING_MENU: 'mapping_menu',

  mappings: {},

  currentMappingName: undefined,

  actionKeys: [],

  setMapping: function () {
    this.mappings = []
    this.mappings[37] = new Key(37, this.ACTION_LINK_MOVE_WEST, !Key.BLOCKING_ACTION, Key.ENABLED)
    this.mappings[38] = new Key(38, this.ACTION_LINK_MOVE_NORTH, !Key.BLOCKING_ACTION, Key.ENABLED)
    this.mappings[39] = new Key(39, this.ACTION_LINK_MOVE_EAST, !Key.BLOCKING_ACTION, Key.ENABLED)
    this.mappings[40] = new Key(40, this.ACTION_LINK_MOVE_SOUTH, !Key.BLOCKING_ACTION, Key.ENABLED)
    this.mappings[65] = new Key(65, this.ACTION_LINK_USE_ITEM_A, Key.BLOCKING_ACTION, !Key.ENABLED)
    this.mappings[66] = new Key(66, this.ACTION_LINK_USE_ITEM_B, Key.BLOCKING_ACTION, !Key.ENABLED)
    /* return
        this.mappings[this.MAPPING_MAIN] = {}
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_MOVE_WEST] = new Key(37, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_MOVE_NORTH] = new Key(38, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_MOVE_EAST] = new Key(39, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_MOVE_SOUTH] = new Key(40, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_USE_ITEM_A] = new Key(65, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_LINK_USE_ITEM_B] = new Key(66, true)
        this.mappings[this.MAPPING_MAIN][this.ACTION_MENU_OPEN] = 42

        this.mappings[this.MAPPING_MENU] = {}
        this.mappings[this.MAPPING_MENU][this.ACTION_MENU_MOVE_LEFT] = 37
        this.mappings[this.MAPPING_MENU][this.ACTION_MENU_MOVE_TOP] = 38
        this.mappings[this.MAPPING_MENU][this.ACTION_MENU_MOVE_RIGHT] = 39
        this.mappings[this.MAPPING_MENU][this.ACTION_MENU_MOVE_BOTTOM] = 40
        this.mappings[this.MAPPING_MENU][this.ACTION_MENU_CLOSE] = 65 */
  },

  getCurrentDrawingAction: function () {
    for (let i = 0; i < this.actionKeys.length; i++) {
      if (this.actionKeys[i].blockingAction) {
        return this.actionKeys[i].use()
      }
    }

    return this.actionKeys[0]?.use()
  },

  getCurrentAction: function () {
    for (let i = 0; i < this.actionKeys.length; i++) {
      if (this.actionKeys[i].blockingAction && !this.actionKeys[i].used) {
        return this.actionKeys[i].use()
      }
    }

    return this.actionKeys[0] && !this.actionKeys[0].blockingAction ? this.actionKeys[0].use() : undefined
  },

  clear: function () {
    this.actionKeys = []
  },

  getKey: function (keyNumber) {
    return this.mappings[keyNumber]
  },

  addActionKey: function (key) {
    this.actionKeys.unshift(key)
  },

  removeActionKey: function (key) {
    const index = this.actionKeys.indexOf(key)
    if (index !== -1) {
      this.actionKeys.splice(index, 1)
    }
  },

  triggerBlockingAction (key) {
    if (key.blockingAction) {
      key.disable()
      const inputManager = this
      setTimeout(() => {
        inputManager.removeActionKey(key)
        key.enable()
      }, _constant__WEBPACK_IMPORTED_MODULE_0__.GAME_INTERVAL_PROCESS * 5)
    }
  },

  handleKeyDown: function (keyNumber) {
    const key = this.getKey(keyNumber)
    if (!key || !key.enabled) {
      return
    }

    if (key && !key.pressed) {
      this.removeActionKey(key)
      this.addActionKey(key)
      this.triggerBlockingAction(key)
      key.press()
    }
  },

  handleKeyUp: function (keyNumber) {
    const key = this.getKey(keyNumber)
    if (!key) {
      return
    }
    this.removeActionKey(key)
    key.unuse()
    key.unpress()
  },

  enable (action) {
    for (const key in this.mappings) {
      if (this.mappings[key].action === action) {
        this.mappings[key].enable()
      }
    }
  },

  startDetection: function () {
    const inputManager = this
    document.onkeydown = function (e) {
      inputManager.handleKeyDown(e.keyCode)
    }
    document.onkeyup = function (e) {
      inputManager.handleKeyUp(e.keyCode)
    }
  },

  stopDetection: function () {
    document.onkeydown = undefined
    document.onkeyup = undefined
  }
});


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
  draw: function (context, text, color, x, y, width, height, letterWidth, letterHeight) {
    for (let i = 0; i < text.length; i++) {
      let char = text[i]
      char = char.toLowerCase()
      const sprite = _resource__WEBPACK_IMPORTED_MODULE_0__["default"].getSprite(`${_constant__WEBPACK_IMPORTED_MODULE_1__.SPRITE_TEXT_PREFIX}_${color}_${char}`)
      if (sprite) {
        sprite.draw(context, x, y, letterWidth, letterHeight)
      }
      x += letterWidth
    }
  }
});


/***/ }),

/***/ "../assets/js/service/transition-manager.js":
/*!**************************************************!*\
  !*** ../assets/js/service/transition-manager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/transition */ "../assets/js/model/transition.js");


;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  transitions: {
    [_model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveEntrance.name]: new _model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveEntrance(),
    [_model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveExit.name]: new _model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveExit(),
    [_model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveStairsDown.name]: new _model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveStairsDown(),
    [_model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveStairsUp.name]: new _model_transition__WEBPACK_IMPORTED_MODULE_0__.CaveStairsUp(),
    [_model_transition__WEBPACK_IMPORTED_MODULE_0__.MapDrag.name]: new _model_transition__WEBPACK_IMPORTED_MODULE_0__.MapDrag()
  },
  get: function (name) {
    return this.transitions[name]
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
      maps[column][line] = new _model_map__WEBPACK_IMPORTED_MODULE_1__.Map(column, line, x, y, width, height, type, tiles, [/* creatures */], [/* items */], [/* characters */], [/* miscs */])
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
    for (let column = 0; column < this.world.length; column++) {
      for (let line = 0; line < this.world[column].length; line++) {
        const map = this.world[column][line]
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
    }
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../assets/js/game/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=game.js.map