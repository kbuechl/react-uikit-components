'use strict';

const events = (props) => {
  return {
    // Mouse
    onClick     : props.onClick,
    onDblclick  : props.onDblclick,
    onMouseDown : props.onMouseDown,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onMouseMove : props.onMouseMove,
    onMouseOver : props.onMouseOver,
    onMouseOut  : props.onMouseOut,
    onMouseUP   : props.onMouseUP,

    // Keyboard
    onKeyDown  : props.onKeyDown,
    onKeyPress : props.onKeyPress,
    onKeyUp    : props.onKeyUp,

    // Form
    onBlur    : props.onBlur,
    onChange  : props.onChange,
    onFocus   : props.onFocus,
    onFocusIn : props.onFocusIn,
    onInput   : props.onInput,
    onInvaid  : props.onInvaid,
    onReset   : props.onReset,
    onSearch  : props.onSearch,
    onSelect  : props.onSelect,
    onSubmit  : props.onSubmit,

    // Frame/Object
    onBeforeUnload: props.onBeforeUnload,
    onHashChange  : props.onHashChange,
    onLoad        : props.onLoad,
    onPageShow    : props.onPageShow,
    onPageHide    : props.onPageHide,
    onResize      : props.onResize,
    onScroll      : props.onScroll,
    onUload       : props.onUload,

    // Drag
    onDrag      : props.onDrag,
    onDraged    : props.onDraged,
    onDragEnter : props.onDragEnter,
    onDragLeave : props.onDragLeave,
    onDragOver  : props.onDragOver,
    onDragStart : props.onDragStart,
    onDrop      : props.onDrop,


    // Clipboard
    onCopy : props.onCopy,
    onCut  : props.onCut,
    onPaste: props.onPaste,

    // Print
    onAfterPrint : props.onAfterPrint,
    onBeforePrint: props.onBeforePrint,

    // Media
    onCanPlay: props.onCanPlay,
    onCanPlayThrough: props.onCanPlayThrough,
    onDurationChange: props.onDurationChange,
    onEmptied: props.onEmptied,
    onEnded: props.onEnded,
    onLoadedData: props.onLoadedData,
    onLoadedMetaData: props.onLoadedMetaData,
    onLoadStart: props.onLoadStart,
    onPause: props.oPausenPause,
    onPlay: props.onPlay,
    onPlaying: props.onPlaying,
    onProgress: props.onProgress,
    onRateChange: props.onRateChange,
    onSeeked: props.onSeeked,
    onSeeking: props.onSeeking,
    onStalled: props.onStalled,
    onSuspend: props.onSuspend,
    ontimeUpdate: props.ontimeUpdate,
    onVolumeChange: props.onVolumeChange,
    onWaiting: props.onWaiting,

    // Animation
    animationend       : props.animationend,
    animationIteration : props.animationIteration,
    animationStart     : props.animationStart,

    // Transition
    transitionend: props.transitionend,

    // Server-Sent
    onOpen: props.onOpen,


    // Misc
    onAbort       : props.onAbort,
    onError       : props.onError,
    onMessage: props.onMessage,
    onMouseWheel: props.onMouseWheel,
    onOnline: props.onOnline,
    onOffline: props.onOffline,
    onPopState: props.onPopState,
    onShow: props.onShow,
    onStorage: props.onStorage,
    onToggle: props.onToggle,
    onWheel: props.onWheel,

    // Touch
    onTouchCancel: props.onTouchCancel,
    onTouched: props.onTouched,
    onTouchMove: props.onTouchMove,
    onTouchStart: props.onTouchStart
  };
};


export default events;
