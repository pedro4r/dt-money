import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends
} from "./chunk-C5HM2JFO.js";
import "./chunk-RVSLBP3T.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react.default.useRef(null);
    const itemMap = import_react.default.useRef(/* @__PURE__ */ new Map()).current;
    return import_react.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return import_react.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = import_react.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return import_react.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = (0, import_react2.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react2.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = (0, import_react3.forwardRef)((props, forwardedRef) => {
  return (0, import_react3.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react3.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react3.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
Object.assign($d7bdfb9eb0fdf311$export$8699f7c8af148338, {
  displayName: $d7bdfb9eb0fdf311$var$GROUP_NAME
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = (0, import_react3.useState)(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = (0, import_react3.useRef)(false);
  const [focusableItemsCount, setFocusableItemsCount] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return (0, import_react3.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: (0, import_react3.useCallback)(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: (0, import_react3.useCallback)(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: (0, import_react3.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: (0, import_react3.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react3.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return (0, import_react3.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
Object.assign($d7bdfb9eb0fdf311$export$ab9df7c53fe8454, {
  displayName: $d7bdfb9eb0fdf311$var$ITEM_NAME
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = (0, import_react4.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react5.useRef)({
    value,
    previous: value
  });
  return (0, import_react5.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
var [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
var [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
var $ce77a8961b41be9e$export$d7b12c4107be0d61 = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = (0, import_react6.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react6.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return (0, import_react6.createElement)($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked)
        onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react6.createElement)($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($ce77a8961b41be9e$export$d7b12c4107be0d61, {
  displayName: $ce77a8961b41be9e$var$RADIO_NAME
});
var $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
var $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
Object.assign($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, {
  displayName: $ce77a8961b41be9e$var$INDICATOR_NAME
});
var $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react6.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react6.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react6.createElement)("input", _extends({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
var [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
var $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
var [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
var $f99a8c78507165f7$export$a98f0dcb43a68a25 = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return (0, import_react6.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, (0, import_react6.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
Object.assign($f99a8c78507165f7$export$a98f0dcb43a68a25, {
  displayName: $f99a8c78507165f7$var$RADIO_GROUP_NAME
});
var $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
var $f99a8c78507165f7$export$9f866c100ef519e4 = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = (0, import_react6.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key))
        isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (0, import_react6.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), (0, import_react6.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
Object.assign($f99a8c78507165f7$export$9f866c100ef519e4, {
  displayName: $f99a8c78507165f7$var$ITEM_NAME
});
var $f99a8c78507165f7$var$INDICATOR_NAME = "RadioGroupIndicator";
var $f99a8c78507165f7$export$5fb54c671a65c88 = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return (0, import_react6.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($f99a8c78507165f7$export$5fb54c671a65c88, {
  displayName: $f99a8c78507165f7$var$INDICATOR_NAME
});
var $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
var $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
var $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;
export {
  $f99a8c78507165f7$export$adb584737d712b70 as Indicator,
  $f99a8c78507165f7$export$6d08773d2e66f8f2 as Item,
  $f99a8c78507165f7$export$a98f0dcb43a68a25 as RadioGroup,
  $f99a8c78507165f7$export$5fb54c671a65c88 as RadioGroupIndicator,
  $f99a8c78507165f7$export$9f866c100ef519e4 as RadioGroupItem,
  $f99a8c78507165f7$export$be92b6f5f03c0fe9 as Root,
  $f99a8c78507165f7$export$c547093f11b76da2 as createRadioGroupScope
};
//# sourceMappingURL=@radix-ui_react-radio-group.js.map
