var exec = cordova.require('cordova/exec');

class SunmiInnerPrinter {

    constructor() {
        console.log('Printer instanced');
    }

    show(msg, onSuccess, onError) {
        var errorCallback = function(obj) {
            onError(obj);
        };

        var successCallback = function(obj) {
            onSuccess(obj);
        };

        exec(successCallback, errorCallback, 'Printer', 'show', [msg]);
    }

    printerInit(onSuccess, onError) {
        var errorCallback = function(obj) {
            onError(obj);
        };

        var successCallback = function(obj) {
            onSuccess(obj);
        };

        exec(successCallback, errorCallback, 'Printer', 'printerInit');
    }

    printerSelfChecking(onSuccess, onError) {
        var errorCallback = function(obj) {
            onError(obj);
        };

        var successCallback = function(obj) {
            onSuccess(obj);
        };

        exec(successCallback, errorCallback, 'Printer', 'printerSelfChecking');
    }

    getPrinterSerialNo(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'getPrinterSerialNo', [text]);
    }

    getPrinterVersion(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'getPrinterVersion', [text]);
    }

    hasPrinter(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'hasPrinter', [text]);
    }

    getPrintedLength(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'getPrintedLength', [text]);
    }

    lineWrap(count, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'lineWrap', [count]);
    }

    sendRAWData(data, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'sendRAWData', [data]);
    }

    setAlignment(align, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'setAlignment', [align]);
    }

    setFontName(name, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'setFontName', [name]);
    }

    setFontSize(size, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'setFontSize', [size]);
    }

    printTextWithFont(text, typeface, fontsize,  onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printTextWithFont', [text, typeface, fontsize]);
    }

    printColumnsText(colsTextArr, colsWidthArr, colsAlign,  onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printColumnsText', [colsTextArr, colsWidthArr, colsAlign]);
    }

    printBitmap(data, width, height,  onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printBitmap', [data, width, height]);
    }

    printTextWithFont(text, typeface, fontsize,  onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printTextWithFont', [text, typeface, fontsize]);
    }

    printBarCode(data, symbology, width, height,  onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printBarCode', [data, symbology, width, height]);
    }

    printQRCode(data, moduleSize, errorLevel, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printQRCode', [data, moduleSize, errorLevel]);
    }

    printOriginalText(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printOriginalText', [text]);
    }

    printString(text, onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printString', [text]);
    }

    printerStatusStartListener(onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printerStatusStartListener');
    }

    printerStatusStopListener(onSuccess, onError) {
        var errorCallback = function(obj) {onError(obj);};
        var successCallback = function(obj) {onSuccess(obj);};
        exec(successCallback, errorCallback, 'Printer', 'printerStatusStopListener');
    }
}

export {SunmiInnerPrinter}
