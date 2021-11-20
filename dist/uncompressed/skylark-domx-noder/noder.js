define([
    "skylark-langx-ns",
    "skylark-langx-types",
    "skylark-langx-arrays",
    "skylark-langx-strings",
    "skylark-langx-scripter",
    "skylark-domx-browser"
], function(skylark, types, arrays, strings,scripter,browser) {
    var  
        map = Array.prototype.map,
        slice = Array.prototype.slice;

    function normalizeContent(content) {
        if (typeof content === 'function') {
            content = content();
        }
        return map.call(types.isArrayLike(content) ? content : [content],value => {
            if (typeof value === 'function') {
                value = value();
            }
            if (isElement(value) || isTextNode(value) || isFragment(value)) {
                return value;
            }
            if (typeof value === 'string' && /\S/.test(value)) {
                return document.createTextNode(value);
            }
        }).filter(value => value);
    }

    function ensureNodes(content, copyByClone) {
        var nodes = normalizeContent(content);


        //if (!types.isArrayLike(nodes)) {
        //    nodes = [nodes];
        //}
        if (copyByClone) {
            nodes = map.call(nodes, function(node) {
                return node.cloneNode(true);
            });
        }
        return arrays.flatten(nodes);
    }

    function enhancePlaceContent(placing,node) {
        if (types.isFunction(placing)) {
            return placing.apply(node,[]);
        }
        if (types.isArrayLike(placing)) {
            var neddsFlattern;
            for (var i=0;i<placing.length;i++) {
                if (types.isFunction(placing[i])) {
                    placing[i] = placing[i].apply(node,[]);
                    if (types.isArrayLike(placing[i])) {
                        neddsFlattern = true;
                    }
                }
            }
            if (neddsFlattern) {
                placing = arrays.flatten(placing);
            }
        }
        return placing;
    }
    function after(node, placing, copyByClone) {
        placing = enhancePlaceContent(placing,node);
        var refNode = node,
            parent = refNode.parentNode;
        if (parent) {
            var nodes = ensureNodes(placing, copyByClone),
                refNode = refNode.nextSibling;

            for (var i = 0; i < nodes.length; i++) {
                if (refNode) {
                    parent.insertBefore(nodes[i], refNode);
                } else {
                    parent.appendChild(nodes[i]);
                }
            }
        }
        return this;
    }

    function append(node, placing, copyByClone) {
        placing = enhancePlaceContent(placing,node);
        var parentNode = node,
            nodes = ensureNodes(placing, copyByClone);
        for (var i = 0; i < nodes.length; i++) {
            parentNode.appendChild(nodes[i]);
        }
        return this;
    }

    function before(node, placing, copyByClone) {
        placing = enhancePlaceContent(placing,node);
        var refNode = node,
            parent = refNode.parentNode;
        if (parent) {
            var nodes = ensureNodes(placing, copyByClone);
            for (var i = 0; i < nodes.length; i++) {
                parent.insertBefore(nodes[i], refNode);
            }
        }
        return this;
    }


    function fromPoint(x,y) {
        return document.elementFromPoint(x,y);
    }

    /**
     * Generate id
     * @param   {HTMLElement} el
     * @returns {String}
     * @private
     */
    function generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent,
            i = str.length,
            sum = 0;

        while (i--) {
            sum += str.charCodeAt(i);
        }

        return sum.toString(36);
    }


    /*   
     * insert one or more nodes as the first children of the specified node.
     * @param {Node} node
     * @param {Node or ArrayLike} placing
     * @param {Boolean Optional} copyByClone
     */
    function prepend(node, placing, copyByClone) {
        var parentNode = node,
            refNode = parentNode.firstChild,
            nodes = ensureNodes(placing, copyByClone);
        for (var i = 0; i < nodes.length; i++) {
            if (refNode) {
                parentNode.insertBefore(nodes[i], refNode);
            } else {
                parentNode.appendChild(nodes[i]);
            }
        }
        return this;
    }


    function noder() {
        return noder;
    }

    Object.assign(noder, {
        after: after,

        append: append,

        before: before,

        blur : function(el) {
            el.blur();
        },

        body: function() {
            return document.body;
        },

        generateId,

        fullscreen: fullscreen,

        focusable: focusable,

        fromPoint,

        isFullscreen,

        prepend: prepend
    });

    return skylark.attach("domx.noder" , noder);
});