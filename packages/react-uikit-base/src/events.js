'use strict';

const events = (props) => {
  return {
    // Mouse
    onClick       : props.onClick,
    onDoubleClick : props.onDoubleClick,
    onMouseDown   : props.onMouseDown,
    onMouseEnter  : props.onMouseEnter,
    onMouseLeave  : props.onMouseLeave,
    onMouseMove   : props.onMouseMove,
    onMouseOut    : props.onMouseOut,
    onMouseOver   : props.onMouseOver,
    onMouseUp     : props.onMouseUp,

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
    onReset   : props.onReset,
    onSelect  : props.onSelect,
    onSubmit  : props.onSubmit,

    // Frame/Object
    onLoad   : props.onLoad,
    onScroll : props.onScroll,

    // Drag
    onDrag      : props.onDrag,
    onDragEnd   : props.onDragEnd,
    onDragEnter : props.onDragEnter,
    onDragLeave : props.onDragLeave,
    onDragExit  : props.onDragExit,
    onDragOver  : props.onDragOver,
    onDragStart : props.onDragStart,
    onDrop      : props.onDrop,


    // Clipboard
    onCopy : props.onCopy,
    onCut  : props.onCut,
    onPaste: props.onPaste,

    // Media
    onCanPlay       : props.onCanPlay,
    onCanPlayThrough: props.onCanPlayThrough,
    onDurationChange: props.onDurationChange,
    onEmptied       : props.onEmptied,
    onEnded         : props.onEnded,
    onLoadedData    : props.onLoadedData,
    onLoadedMetadata: props.onLoadedMetadata,
    onLoadStart     : props.onLoadStart,
    onPause         : props.oPausenPause,
    onPlay          : props.onPlay,
    onPlaying       : props.onPlaying,
    onProgress      : props.onProgress,
    onRateChange    : props.onRateChange,
    onSeeked        : props.onSeeked,
    onSeeking       : props.onSeeking,
    onStalled       : props.onStalled,
    onSuspend       : props.onSuspend,
    onTimeUpdate    : props.onTimeUpdate,
    onVolumeChange  : props.onVolumeChange,
    onWaiting       : props.onWaiting,

    // Misc
    onAbort : props.onAbort,
    onError : props.onError,
    onWheel : props.onWheel,

    // Touch
    onTouchCancel: props.onTouchCancel,
    onTouchEnd: props.onTouchend,
    onTouchMove: props.onTouchMove,
    onTouchStart: props.onTouchStart
  };
};


export default events;
