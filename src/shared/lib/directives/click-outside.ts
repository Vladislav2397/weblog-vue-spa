/* eslint-disable */
function validate(binding: any) {
    if (typeof binding.value !== 'function') {
        console.warn(
            '[Vue-click-outside:] provided expression',
            binding.expression,
            'is not a function.',
        )
        return false
    }

    return true
}

function isPopup(popupItem: any, elements: any) {
    if (!popupItem || !elements) return false

    for (let i = 0, len = elements.length; i < len; i++) {
        try {
            if (popupItem.contains(elements[i])) {
                return true
            }
            if (elements[i].contains(popupItem)) {
                return false
            }
        } catch (e) {
            return false
        }
    }

    return false
}

function isServer(vNode: any) {
    return (
        typeof vNode.componentInstance !== 'undefined' &&
        vNode.componentInstance.$isServer
    )
}
/* eslint-disable */

export default {
    bind(el: any, binding: any, vNode: any) {
        if (!validate(binding)) return

        // Define Handler and cache it on the element
        function handler(e: any) {
            if (!vNode.context) return

            // some components may have related popup item, on which we shall prevent the click outside event handler.
            const elements = e.path || (e.composedPath && e.composedPath())
            elements && elements.length > 0 && elements.unshift(e.target)

            if (
                el.contains(e.target) ||
                isPopup(vNode.context.popupItem, elements)
            )
                return

            el.__vueClickOutside__.callback(e)
        }

        // add Event Listeners
        el.__vueClickOutside__ = {
            handler,
            callback: binding.value,
        }
        const clickHandler =
            'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
        !isServer(vNode) && document.addEventListener(clickHandler, handler)
    },

    update(el: any, binding: any) {
        if (validate(binding)) el.__vueClickOutside__.callback = binding.value
    },

    unbind(el: any, binding: any, vNode: any) {
        // Remove Event Listeners
        const clickHandler =
            'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
        !isServer(vNode) &&
            el.__vueClickOutside__ &&
            document.removeEventListener(
                clickHandler,
                el.__vueClickOutside__.handler,
            )
        delete el.__vueClickOutside__
    },
}
/* eslint-enable */
