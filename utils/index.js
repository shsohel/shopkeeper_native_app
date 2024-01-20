export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i'
    );
    return pattern.test(url);
  }
};

export const convertToBangla = (english_number) => {
  var finalEnlishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    var retStr = this;
    for (var x in finalEnlishToBanglaNumber) {
      retStr = retStr.replace(new RegExp(x, "g"), finalEnlishToBanglaNumber[x]);
    }
    return retStr;
  };

  var bangla_converted_number = english_number.getDigitBanglaFromEnglish();
  return bangla_converted_number;
};
export const convertToEnglish = (english_number) => {
  var finalEnlishToBanglaNumber = {
    "০": 0,
    "১": 1,
    "২": 2,
    "৩": 3,
    "৪": 4,
    "৫": 5,
    "৬": 6,
    "৭": 7,
    "৮": 8,
    "৯": 9,
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    var retStr = this;
    for (var x in finalEnlishToBanglaNumber) {
      retStr = retStr.replace(new RegExp(x, "g"), finalEnlishToBanglaNumber[x]);
    }
    return retStr;
  };

  var bangla_converted_number = english_number.getDigitBanglaFromEnglish();
  return bangla_converted_number;
};