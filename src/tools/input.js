(function() {
    let pressedKeys = {};

    function setKey(event, status) {
        const code = event.keyCode;
        let key;

        switch(code) {
        case 32:
            key = 'SPACE'; break;
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    const buttons = document.querySelectorAll('.controls button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('mousedown', function(e) {
            setKey({keyCode: parseInt(e.currentTarget.value)}, true);
        });
        button.addEventListener('touchstart', function(e) {
            setKey({keyCode: parseInt(e.currentTarget.value)}, true);
        });
        button.addEventListener('mouseup', function(e) {
            setKey({keyCode: parseInt(e.currentTarget.value)}, false);
        })
        button.addEventListener('touchend', function(e) {
            setKey({keyCode: parseInt(e.currentTarget.value)}, false);
        })
    }

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();
