;
jQuery(function ($) {
    
    $.swatchpicker = new function (options) {
        this.defaults = {};
        this.swatchesNames = {};
        this.swatches = {};
        this._element = null;
        var settings = $.extend({
            
        }, options);
    };
    
    $.swatchpicker.defaults = {};

    
    $.swatchpicker.swatchesNames['html'] = 'HTML';
    $.swatchpicker.swatches['html'] = [
        {name: 'black', r: 0, g: 0, b: 0},
        {name: 'dimgray', r: 0.4117647058823529, g: 0.4117647058823529, b: 0.4117647058823529},
        {name: 'gray', r: 0.5019607843137255, g: 0.5019607843137255, b: 0.5019607843137255},
        {name: 'darkgray', r: 0.6627450980392157, g: 0.6627450980392157, b: 0.6627450980392157},
        {name: 'silver', r: 0.7529411764705882, g: 0.7529411764705882, b: 0.7529411764705882},
        {name: 'lightgrey', r: 0.8274509803921568, g: 0.8274509803921568, b: 0.8274509803921568},
        {name: 'gainsboro', r: 0.8627450980392157, g: 0.8627450980392157, b: 0.8627450980392157},
        {name: 'whitesmoke', r: 0.9607843137254902, g: 0.9607843137254902, b: 0.9607843137254902},
        {name: 'white', r: 1, g: 1, b: 1},
        {name: 'rosybrown', r: 0.7372549019607844, g: 0.5607843137254902, b: 0.5607843137254902},
        {name: 'indianred', r: 0.803921568627451, g: 0.3607843137254902, b: 0.3607843137254902},
        {name: 'brown', r: 0.6470588235294118, g: 0.16470588235294117, b: 0.16470588235294117},
        {name: 'firebrick', r: 0.6980392156862745, g: 0.13333333333333333, b: 0.13333333333333333},
        {name: 'lightcoral', r: 0.9411764705882353, g: 0.5019607843137255, b: 0.5019607843137255},
        {name: 'maroon', r: 0.5019607843137255, g: 0, b: 0},
        {name: 'darkred', r: 0.5450980392156862, g: 0, b: 0},
        {name: 'red', r: 1, g: 0, b: 0},
        {name: 'snow', r: 1, g: 0.9803921568627451, b: 0.9803921568627451},
        {name: 'salmon', r: 0.9803921568627451, g: 0.5019607843137255, b: 0.4470588235294118},
        {name: 'mistyrose', r: 1, g: 0.8941176470588236, b: 0.8823529411764706},
        {name: 'tomato', r: 1, g: 0.38823529411764707, b: 0.2784313725490196},
        {name: 'darksalmon', r: 0.9137254901960784, g: 0.5882352941176471, b: 0.47843137254901963},
        {name: 'orangered', r: 1, g: 0.27058823529411763, b: 0},
        {name: 'coral', r: 1, g: 0.4980392156862745, b: 0.3137254901960784},
        {name: 'lightsalmon', r: 1, g: 0.6274509803921569, b: 0.47843137254901963},
        {name: 'sienna', r: 0.6274509803921569, g: 0.3215686274509804, b: 0.17647058823529413},
        {name: 'seashell', r: 1, g: 0.9607843137254902, b: 0.9333333333333333},
        {name: 'chocolate', r: 0.8235294117647058, g: 0.4117647058823529, b: 0.11764705882352941},
        {name: 'saddlebrown', r: 0.5450980392156862, g: 0.27058823529411763, b: 0.07450980392156863},
        {name: 'sandybrown', r: 0.9568627450980393, g: 0.6431372549019608, b: 0.3764705882352941},
        {name: 'peachpuff', r: 1, g: 0.8549019607843137, b: 0.7254901960784313},
        {name: 'peru', r: 0.803921568627451, g: 0.5215686274509804, b: 0.24705882352941178},
        {name: 'linen', r: 0.9803921568627451, g: 0.9411764705882353, b: 0.9019607843137255},
        {name: 'darkorange', r: 1, g: 0.5490196078431373, b: 0},
        {name: 'bisque', r: 1, g: 0.8941176470588236, b: 0.7686274509803922},
        {name: 'burlywood', r: 0.8705882352941177, g: 0.7215686274509804, b: 0.5294117647058824},
        {name: 'tan', r: 0.8235294117647058, g: 0.7058823529411765, b: 0.5490196078431373},
        {name: 'antiquewhite', r: 0.9803921568627451, g: 0.9215686274509803, b: 0.8431372549019608},
        {name: 'navajowhite', r: 1, g: 0.8705882352941177, b: 0.6784313725490196},
        {name: 'blanchedalmond', r: 1, g: 0.9215686274509803, b: 0.803921568627451},
        {name: 'papayawhip', r: 1, g: 0.9372549019607843, b: 0.8352941176470589},
        {name: 'orange', r: 1, g: 0.6470588235294118, b: 0},
        {name: 'moccasin', r: 1, g: 0.8941176470588236, b: 0.7098039215686275},
        {name: 'wheat', r: 0.9607843137254902, g: 0.8705882352941177, b: 0.7019607843137254},
        {name: 'oldlace', r: 0.9921568627450981, g: 0.9607843137254902, b: 0.9019607843137255},
        {name: 'floralwhite', r: 1, g: 0.9803921568627451, b: 0.9411764705882353},
        {name: 'goldenrod', r: 0.8549019607843137, g: 0.6470588235294118, b: 0.12549019607843137},
        {name: 'darkgoldenrod', r: 0.7215686274509804, g: 0.5254901960784314, b: 0.043137254901960784},
        {name: 'cornsilk', r: 1, g: 0.9725490196078431, b: 0.8627450980392157},
        {name: 'gold', r: 1, g: 0.8431372549019608, b: 0},
        {name: 'palegoldenrod', r: 0.9333333333333333, g: 0.9098039215686274, b: 0.6666666666666666},
        {name: 'khaki', r: 0.9411764705882353, g: 0.9019607843137255, b: 0.5490196078431373},
        {name: 'lemonchiffon', r: 1, g: 0.9803921568627451, b: 0.803921568627451},
        {name: 'darkkhaki', r: 0.7411764705882353, g: 0.7176470588235294, b: 0.4196078431372549},
        {name: 'beige', r: 0.9607843137254902, g: 0.9607843137254902, b: 0.8627450980392157},
        {name: 'lightgoldenrodyellow', r: 0.9803921568627451, g: 0.9803921568627451, b: 0.8235294117647058},
        {name: 'olive', r: 0.5019607843137255, g: 0.5019607843137255, b: 0},
        {name: 'yellow', r: 1, g: 1, b: 0},
        {name: 'lightyellow', r: 1, g: 1, b: 0.8784313725490196},
        {name: 'ivory', r: 1, g: 1, b: 0.9411764705882353},
        {name: 'olivedrab', r: 0.4196078431372549, g: 0.5568627450980392, b: 0.13725490196078433},
        {name: 'yellowgreen', r: 0.6039215686274509, g: 0.803921568627451, b: 0.19607843137254902},
        {name: 'darkolivegreen', r: 0.3333333333333333, g: 0.4196078431372549, b: 0.1843137254901961},
        {name: 'greenyellow', r: 0.6784313725490196, g: 1, b: 0.1843137254901961},
        {name: 'lawngreen', r: 0.48627450980392156, g: 0.9882352941176471, b: 0},
        {name: 'chartreuse', r: 0.4980392156862745, g: 1, b: 0},
        {name: 'darkseagreen', r: 0.5607843137254902, g: 0.7372549019607844, b: 0.5607843137254902},
        {name: 'forestgreen', r: 0.13333333333333333, g: 0.5450980392156862, b: 0.13333333333333333},
        {name: 'limegreen', r: 0.19607843137254902, g: 0.803921568627451, b: 0.19607843137254902},
        {name: 'lightgreen', r: 0.5647058823529412, g: 0.9333333333333333, b: 0.5647058823529412},
        {name: 'palegreen', r: 0.596078431372549, g: 0.984313725490196, b: 0.596078431372549},
        {name: 'darkgreen', r: 0, g: 0.39215686274509803, b: 0},
        {name: 'green', r: 0, g: 0.5019607843137255, b: 0},
        {name: 'lime', r: 0, g: 1, b: 0},
        {name: 'honeydew', r: 0.9411764705882353, g: 1, b: 0.9411764705882353},
        {name: 'mediumseagreen', r: 0.23529411764705882, g: 0.7019607843137254, b: 0.44313725490196076},
        {name: 'seagreen', r: 0.1803921568627451, g: 0.5450980392156862, b: 0.3411764705882353},
        {name: 'springgreen', r: 0, g: 1, b: 0.4980392156862745},
        {name: 'mintcream', r: 0.9607843137254902, g: 1, b: 0.9803921568627451},
        {name: 'mediumspringgreen', r: 0, g: 0.9803921568627451, b: 0.6039215686274509},
        {name: 'mediumaquamarine', r: 0.4, g: 0.803921568627451, b: 0.6666666666666666},
        {name: 'aquamarine', r: 0.4980392156862745, g: 1, b: 0.8313725490196079},
        {name: 'turquoise', r: 0.25098039215686274, g: 0.8784313725490196, b: 0.8156862745098039},
        {name: 'lightseagreen', r: 0.12549019607843137, g: 0.6980392156862745, b: 0.6666666666666666},
        {name: 'mediumturquoise', r: 0.2823529411764706, g: 0.8196078431372549, b: 0.8},
        {name: 'darkslategray', r: 0.1843137254901961, g: 0.30980392156862746, b: 0.30980392156862746},
        {name: 'paleturquoise', r: 0.6862745098039216, g: 0.9333333333333333, b: 0.9333333333333333},
        {name: 'teal', r: 0, g: 0.5019607843137255, b: 0.5019607843137255},
        {name: 'darkcyan', r: 0, g: 0.5450980392156862, b: 0.5450980392156862},
        {name: 'darkturquoise', r: 0, g: 0.807843137254902, b: 0.8196078431372549},
        {name: 'aqua', r: 0, g: 1, b: 1},
        {name: 'cyan', r: 0, g: 1, b: 1},
        {name: 'lightcyan', r: 0.8784313725490196, g: 1, b: 1},
        {name: 'azure', r: 0.9411764705882353, g: 1, b: 1},
        {name: 'cadetblue', r: 0.37254901960784315, g: 0.6196078431372549, b: 0.6274509803921569},
        {name: 'powderblue', r: 0.6901960784313725, g: 0.8784313725490196, b: 0.9019607843137255},
        {name: 'lightblue', r: 0.6784313725490196, g: 0.8470588235294118, b: 0.9019607843137255},
        {name: 'deepskyblue', r: 0, g: 0.7490196078431373, b: 1},
        {name: 'skyblue', r: 0.5294117647058824, g: 0.807843137254902, b: 0.9215686274509803},
        {name: 'lightskyblue', r: 0.5294117647058824, g: 0.807843137254902, b: 0.9803921568627451},
        {name: 'steelblue', r: 0.27450980392156865, g: 0.5098039215686274, b: 0.7058823529411765},
        {name: 'aliceblue', r: 0.9411764705882353, g: 0.9725490196078431, b: 1},
        {name: 'dodgerblue', r: 0.11764705882352941, g: 0.5647058823529412, b: 1},
        {name: 'slategray', r: 0.4392156862745098, g: 0.5019607843137255, b: 0.5647058823529412},
        {name: 'lightslategray', r: 0.4666666666666667, g: 0.5333333333333333, b: 0.6},
        {name: 'lightsteelblue', r: 0.6901960784313725, g: 0.7686274509803922, b: 0.8705882352941177},
        {name: 'cornflowerblue', r: 0.39215686274509803, g: 0.5843137254901961, b: 0.9294117647058824},
        {name: 'royalblue', r: 0.2549019607843137, g: 0.4117647058823529, b: 0.8823529411764706},
        {name: 'midnightblue', r: 0.09803921568627451, g: 0.09803921568627451, b: 0.4392156862745098},
        {name: 'lavender', r: 0.9019607843137255, g: 0.9019607843137255, b: 0.9803921568627451},
        {name: 'navy', r: 0, g: 0, b: 0.5019607843137255},
        {name: 'darkblue', r: 0, g: 0, b: 0.5450980392156862},
        {name: 'mediumblue', r: 0, g: 0, b: 0.803921568627451},
        {name: 'blue', r: 0, g: 0, b: 1},
        {name: 'ghostwhite', r: 0.9725490196078431, g: 0.9725490196078431, b: 1},
        {name: 'darkslateblue', r: 0.2823529411764706, g: 0.23921568627450981, b: 0.5450980392156862},
        {name: 'slateblue', r: 0.41568627450980394, g: 0.35294117647058826, b: 0.803921568627451},
        {name: 'mediumslateblue', r: 0.4823529411764706, g: 0.40784313725490196, b: 0.9333333333333333},
        {name: 'mediumpurple', r: 0.5764705882352941, g: 0.4392156862745098, b: 0.8588235294117647},
        {name: 'blueviolet', r: 0.5411764705882353, g: 0.16862745098039217, b: 0.8862745098039215},
        {name: 'indigo', r: 0.29411764705882354, g: 0, b: 0.5098039215686274},
        {name: 'darkorchid', r: 0.6, g: 0.19607843137254902, b: 0.8},
        {name: 'darkviolet', r: 0.5803921568627451, g: 0, b: 0.8274509803921568},
        {name: 'mediumorchid', r: 0.7294117647058823, g: 0.3333333333333333, b: 0.8274509803921568},
        {name: 'thistle', r: 0.8470588235294118, g: 0.7490196078431373, b: 0.8470588235294118},
        {name: 'plum', r: 0.8666666666666667, g: 0.6274509803921569, b: 0.8666666666666667},
        {name: 'violet', r: 0.9333333333333333, g: 0.5098039215686274, b: 0.9333333333333333},
        {name: 'purple', r: 0.5019607843137255, g: 0, b: 0.5019607843137255},
        {name: 'darkmagenta', r: 0.5450980392156862, g: 0, b: 0.5450980392156862},
        {name: 'magenta', r: 1, g: 0, b: 1},
        {name: 'fuchsia', r: 1, g: 0, b: 1},
        {name: 'orchid', r: 0.8549019607843137, g: 0.4392156862745098, b: 0.8392156862745098},
        {name: 'mediumvioletred', r: 0.7803921568627451, g: 0.08235294117647059, b: 0.5215686274509804},
        {name: 'deeppink', r: 1, g: 0.0784313725490196, b: 0.5764705882352941},
        {name: 'hotpink', r: 1, g: 0.4117647058823529, b: 0.7058823529411765},
        {name: 'palevioletred', r: 0.8588235294117647, g: 0.4392156862745098, b: 0.5764705882352941},
        {name: 'lavenderblush', r: 1, g: 0.9411764705882353, b: 0.9607843137254902},
        {name: 'crimson', r: 0.8627450980392157, g: 0.0784313725490196, b: 0.23529411764705882},
        {name: 'pink', r: 1, g: 0.7529411764705882, b: 0.796078431372549},
        {name: 'lightpink', r: 1, g: 0.7137254901960784, b: 0.7568627450980392}
    ];

    $.swatchpicker.swatchesNames['crayola'] = 'Crayola';
    $.swatchpicker.swatches['crayola'] = [
        {name: 'Almond', r: 0.937254901960784, g: 0.858823529411765, b: 0.772549019607843},
        {name: 'Antique Brass', r: 0.803921568627451, g: 0.584313725490196, b: 0.458823529411765},
        {name: 'Apricot', r: 0.992156862745098, g: 0.850980392156863, b: 0.709803921568627},
        {name: 'Aquamarine', r: 0.470588235294118, g: 0.858823529411765, b: 0.886274509803922},
        {name: 'Asparagus', r: 0.529411764705882, g: 0.662745098039216, b: 0.419607843137255},
        {name: 'Atomic Tangerine', r: 1, g: 0.643137254901961, b: 0.454901960784314},
        {name: 'Banana Mania', r: 0.980392156862745, g: 0.905882352941176, b: 0.709803921568627},
        {name: 'Beaver', r: 0.623529411764706, g: 0.505882352941176, b: 0.43921568627451},
        {name: 'Bittersweet', r: 0.992156862745098, g: 0.486274509803922, b: 0.431372549019608},
        {name: 'Black', r: 0.137254901960784, g: 0.137254901960784, b: 0.137254901960784},
        {name: 'Blue', r: 0.12156862745098, g: 0.458823529411765, b: 0.996078431372549},
        {name: 'Blue Bell', r: 0.67843137254902, g: 0.67843137254902, b: 0.83921568627451},
        {name: 'Blue Green', r: 0.0980392156862745, g: 0.619607843137255, b: 0.741176470588235},
        {name: 'Blue Violet', r: 0.450980392156863, g: 0.4, b: 0.741176470588235},
        {name: 'Blush', r: 0.870588235294118, g: 0.364705882352941, b: 0.513725490196078},
        {name: 'Brick Red', r: 0.796078431372549, g: 0.254901960784314, b: 0.329411764705882},
        {name: 'Brown', r: 0.705882352941177, g: 0.403921568627451, b: 0.301960784313725},
        {name: 'Burnt Orange', r: 1, g: 0.498039215686275, b: 0.286274509803922},
        {name: 'Burnt Sienna', r: 0.917647058823529, g: 0.494117647058824, b: 0.364705882352941},
        {name: 'Cadet Blue', r: 0.690196078431373, g: 0.717647058823529, b: 0.776470588235294},
        {name: 'Canary', r: 1, g: 1, b: 0.6},
        {name: 'Caribbean Green', r: 0.109803921568627, g: 0.827450980392157, b: 0.635294117647059},
        {name: 'Carnation Pink', r: 1, g: 0.666666666666667, b: 0.8},
        {name: 'Cerise', r: 0.866666666666667, g: 0.266666666666667, b: 0.572549019607843},
        {name: 'Cerulean', r: 0.113725490196078, g: 0.674509803921569, b: 0.83921568627451},
        {name: 'Chestnut', r: 0.737254901960784, g: 0.364705882352941, b: 0.345098039215686},
        {name: 'Copper', r: 0.866666666666667, g: 0.580392156862745, b: 0.458823529411765},
        {name: 'Cornflower', r: 0.603921568627451, g: 0.807843137254902, b: 0.92156862745098},
        {name: 'Cotton Candy', r: 1, g: 0.737254901960784, b: 0.850980392156863},
        {name: 'Dandelion', r: 0.992156862745098, g: 0.858823529411765, b: 0.427450980392157},
        {name: 'Denim', r: 0.168627450980392, g: 0.423529411764706, b: 0.768627450980392},
        {name: 'Desert Sand', r: 0.937254901960784, g: 0.803921568627451, b: 0.72156862745098},
        {name: 'Eggplant', r: 0.431372549019608, g: 0.317647058823529, b: 0.376470588235294},
        {name: 'Electric Lime', r: 0.113725490196078, g: 0.976470588235294, b: 0.0784313725490196},
        {name: 'Fern', r: 0.443137254901961, g: 0.737254901960784, b: 0.470588235294118},
        {name: 'Forest Green', r: 0.427450980392157, g: 0.682352941176471, b: 0.505882352941176},
        {name: 'Fuchsia', r: 0.764705882352941, g: 0.392156862745098, b: 0.772549019607843},
        {name: 'Fuzzy Wuzzy Brown', r: 0.8, g: 0.4, b: 0.4},
        {name: 'Gold', r: 0.905882352941176, g: 0.776470588235294, b: 0.592156862745098},
        {name: 'Goldenrod', r: 0.988235294117647, g: 0.850980392156863, b: 0.458823529411765},
        {name: 'Granny Smith Apple', r: 0.658823529411765, g: 0.894117647058824, b: 0.627450980392157},
        {name: 'Gray', r: 0.584313725490196, g: 0.568627450980392, b: 0.549019607843137},
        {name: 'Green', r: 0.109803921568627, g: 0.674509803921569, b: 0.470588235294118},
        {name: 'Green Yellow', r: 0.941176470588235, g: 0.909803921568627, b: 0.568627450980392},
        {name: 'Hot Magenta', r: 1, g: 0.113725490196078, b: 0.807843137254902},
        {name: 'Inch Worm', r: 0.698039215686274, g: 0.925490196078431, b: 0.364705882352941},
        {name: 'Indigo', r: 0.364705882352941, g: 0.462745098039216, b: 0.796078431372549},
        {name: 'Jazzberry Jam', r: 0.792156862745098, g: 0.215686274509804, b: 0.403921568627451},
        {name: 'Jungle Green', r: 0.231372549019608, g: 0.690196078431373, b: 0.56078431372549},
        {name: 'Laser Lemon', r: 0.992156862745098, g: 0.988235294117647, b: 0.454901960784314},
        {name: 'Lavender', r: 0.988235294117647, g: 0.705882352941177, b: 0.835294117647059},
        {name: 'Macaroni and Cheese', r: 1, g: 0.741176470588235, b: 0.533333333333333},
        {name: 'Magenta', r: 0.964705882352941, g: 0.392156862745098, b: 0.686274509803922},
        {name: 'Mahogany', r: 0.803921568627451, g: 0.290196078431373, b: 0.290196078431373},
        {name: 'Manatee', r: 0.592156862745098, g: 0.603921568627451, b: 0.666666666666667},
        {name: 'Mango Tango', r: 1, g: 0.509803921568627, b: 0.262745098039216},
        {name: 'Maroon', r: 0.784313725490196, g: 0.219607843137255, b: 0.352941176470588},
        {name: 'Mauvelous', r: 0.937254901960784, g: 0.596078431372549, b: 0.666666666666667},
        {name: 'Melon', r: 0.992156862745098, g: 0.737254901960784, b: 0.705882352941177},
        {name: 'Midnight Blue', r: 0.101960784313725, g: 0.282352941176471, b: 0.462745098039216},
        {name: 'Mountain Meadow', r: 0.188235294117647, g: 0.729411764705882, b: 0.56078431372549},
        {name: 'Navy Blue', r: 0.0980392156862745, g: 0.454901960784314, b: 0.823529411764706},
        {name: 'Neon Carrot', r: 1, g: 0.63921568627451, b: 0.262745098039216},
        {name: 'Olive Green', r: 0.729411764705882, g: 0.72156862745098, b: 0.423529411764706},
        {name: 'Orange', r: 1, g: 0.458823529411765, b: 0.219607843137255},
        {name: 'Orchid', r: 0.901960784313726, g: 0.658823529411765, b: 0.843137254901961},
        {name: 'Outer Space', r: 0.254901960784314, g: 0.290196078431373, b: 0.298039215686275},
        {name: 'Outrageous Orange', r: 1, g: 0.431372549019608, b: 0.290196078431373},
        {name: 'Pacific Blue', r: 0.109803921568627, g: 0.662745098039216, b: 0.788235294117647},
        {name: 'Peach', r: 1, g: 0.811764705882353, b: 0.670588235294118},
        {name: 'Periwinkle', r: 0.772549019607843, g: 0.815686274509804, b: 0.901960784313726},
        {name: 'Piggy Pink', r: 0.992156862745098, g: 0.843137254901961, b: 0.894117647058824},
        {name: 'Pine Green', r: 0.0823529411764706, g: 0.501960784313725, b: 0.470588235294118},
        {name: 'Pink Flamingo', r: 0.988235294117647, g: 0.454901960784314, b: 0.992156862745098},
        {name: 'Pink Sherbet', r: 0.968627450980392, g: 0.501960784313725, b: 0.631372549019608},
        {name: 'Plum', r: 0.556862745098039, g: 0.270588235294118, b: 0.52156862745098},
        {name: 'Purple Heart', r: 0.454901960784314, g: 0.258823529411765, b: 0.784313725490196},
        {name: 'Purple Mountains’ Majesty', r: 0.615686274509804, g: 0.505882352941176, b: 0.729411764705882},
        {name: 'Purple Pizzazz', r: 1, g: 0.113725490196078, b: 0.807843137254902},
        {name: 'Radical Red', r: 1, g: 0.286274509803922, b: 0.423529411764706},
        {name: 'Raw Sienna', r: 0.83921568627451, g: 0.541176470588235, b: 0.349019607843137},
        {name: 'Razzle Dazzle Rose', r: 1, g: 0.282352941176471, b: 0.815686274509804},
        {name: 'Razzmatazz', r: 0.890196078431372, g: 0.145098039215686, b: 0.419607843137255},
        {name: 'Red', r: 0.933333333333333, g: 0.125490196078431, b: 0.301960784313725},
        {name: 'Red Orange', r: 1, g: 0.325490196078431, b: 0.286274509803922},
        {name: 'Red Violet', r: 0.752941176470588, g: 0.266666666666667, b: 0.56078431372549},
        {name: 'Robin Egg Blue', r: 0.12156862745098, g: 0.807843137254902, b: 0.796078431372549},
        {name: 'Royal Purple', r: 0.470588235294118, g: 0.317647058823529, b: 0.662745098039216},
        {name: 'Salmon', r: 1, g: 0.607843137254902, b: 0.666666666666667},
        {name: 'Scarlet', r: 0.988235294117647, g: 0.156862745098039, b: 0.27843137254902},
        {name: 'Screamin Green', r: 0.462745098039216, g: 1, b: 0.47843137254902},
        {name: 'Sea Green', r: 0.623529411764706, g: 0.886274509803922, b: 0.749019607843137},
        {name: 'Sepia', r: 0.647058823529412, g: 0.411764705882353, b: 0.309803921568627},
        {name: 'Shadow', r: 0.541176470588235, g: 0.474509803921569, b: 0.364705882352941},
        {name: 'Shamrock', r: 0.270588235294118, g: 0.807843137254902, b: 0.635294117647059},
        {name: 'Shocking Pink', r: 0.984313725490196, g: 0.494117647058824, b: 0.992156862745098},
        {name: 'Silver', r: 0.803921568627451, g: 0.772549019607843, b: 0.76078431372549},
        {name: 'Sky Blue', r: 0.501960784313725, g: 0.854901960784314, b: 0.92156862745098},
        {name: 'Spring Green', r: 0.925490196078431, g: 0.917647058823529, b: 0.745098039215686},
        {name: 'Sunglow', r: 1, g: 0.811764705882353, b: 0.282352941176471},
        {name: 'Sunset Orange', r: 0.992156862745098, g: 0.368627450980392, b: 0.325490196078431},
        {name: 'Tan', r: 0.980392156862745, g: 0.654901960784314, b: 0.423529411764706},
        {name: 'Tickle Me Pink', r: 0.988235294117647, g: 0.537254901960784, b: 0.674509803921569},
        {name: 'Timberwolf', r: 0.858823529411765, g: 0.843137254901961, b: 0.823529411764706},
        {name: 'Tropical Rain Forest', r: 0.0901960784313725, g: 0.501960784313725, b: 0.427450980392157},
        {name: 'Tumbleweed', r: 0.870588235294118, g: 0.666666666666667, b: 0.533333333333333},
        {name: 'Turquoise Blue', r: 0.466666666666667, g: 0.866666666666667, b: 0.905882352941176},
        {name: 'Unmellow Yellow', r: 0.992156862745098, g: 0.988235294117647, b: 0.454901960784314},
        {name: 'Violet (Purple)', r: 0.572549019607843, g: 0.431372549019608, b: 0.682352941176471},
        {name: 'Violet Red', r: 0.968627450980392, g: 0.325490196078431, b: 0.580392156862745},
        {name: 'Vivid Tangerine', r: 1, g: 0.627450980392157, b: 0.537254901960784},
        {name: 'Vivid Violet', r: 0.56078431372549, g: 0.313725490196078, b: 0.615686274509804},
        {name: 'White', r: 0.929411764705882, g: 0.929411764705882, b: 0.929411764705882},
        {name: 'Wild Blue Yonder', r: 0.635294117647059, g: 0.67843137254902, b: 0.815686274509804},
        {name: 'Wild Strawberry', r: 1, g: 0.262745098039216, b: 0.643137254901961},
        {name: 'Wild Watermelon', r: 0.988235294117647, g: 0.423529411764706, b: 0.52156862745098},
        {name: 'Wisteria', r: 0.803921568627451, g: 0.643137254901961, b: 0.870588235294118},
        {name: 'Yellow', r: 0.988235294117647, g: 0.909803921568627, b: 0.513725490196078},
        {name: 'Yellow Green', r: 0.772549019607843, g: 0.890196078431372, b: 0.517647058823529},
        {name: 'Yellow Orange', r: 1, g: 0.713725490196078, b: 0.325490196078431}
    ];

    $.swatchpicker.swatchesNames['x11'] = 'X11';
    $.swatchpicker.swatches['x11'] = [
        {name: 'Alice Blue', r: 0.94, g: 0.97, b: 1},
        {name: 'Antique White', r: 0.98, g: 0.92, b: 0.84},
        {name: 'Aqua', r: 0, g: 1, b: 1},
        {name: 'Aquamarine', r: 0.5, g: 1, b: 0.83},
        {name: 'Azure', r: 0.94, g: 1, b: 1},
        {name: 'Beige', r: 0.96, g: 0.96, b: 0.86},
        {name: 'Bisque', r: 1, g: 0.89, b: 0.77},
        {name: 'Black', r: 0, g: 0, b: 0},
        {name: 'Blanched Almond', r: 1, g: 0.92, b: 0.8},
        {name: 'Blue', r: 0, g: 0, b: 1},
        {name: 'Blue Violet', r: 0.54, g: 0.17, b: 0.89},
        {name: 'Brown', r: 0.65, g: 0.16, b: 0.16},
        {name: 'Burlywood', r: 0.87, g: 0.72, b: 0.53},
        {name: 'Cadet Blue', r: 0.37, g: 0.62, b: 0.63},
        {name: 'Chartreuse', r: 0.5, g: 1, b: 0},
        {name: 'Chocolate', r: 0.82, g: 0.41, b: 0.12},
        {name: 'Coral', r: 1, g: 0.5, b: 0.31},
        {name: 'Cornflower', r: 0.39, g: 0.58, b: 0.93},
        {name: 'Cornsilk', r: 1, g: 0.97, b: 0.86},
        {name: 'Crimson', r: 0.86, g: 0.08, b: 0.24},
        {name: 'Cyan', r: 0, g: 1, b: 1},
        {name: 'Dark Blue', r: 0, g: 0, b: 0.55},
        {name: 'Dark Cyan', r: 0, g: 0.55, b: 0.55},
        {name: 'Dark Goldenrod', r: 0.72, g: 0.53, b: 0.04},
        {name: 'Dark Gray', r: 0.66, g: 0.66, b: 0.66},
        {name: 'Dark Green', r: 0, g: 0.39, b: 0},
        {name: 'Dark Khaki', r: 0.74, g: 0.72, b: 0.42},
        {name: 'Dark Magenta', r: 0.55, g: 0, b: 0.55},
        {name: 'Dark Olive Green', r: 0.33, g: 0.42, b: 0.18},
        {name: 'Dark Orange', r: 1, g: 0.55, b: 0},
        {name: 'Dark Orchid', r: 0.6, g: 0.2, b: 0.8},
        {name: 'Dark Red', r: 0.55, g: 0, b: 0},
        {name: 'Dark Salmon', r: 0.91, g: 0.59, b: 0.48},
        {name: 'Dark Sea Green', r: 0.56, g: 0.74, b: 0.56},
        {name: 'Dark Slate Blue', r: 0.28, g: 0.24, b: 0.55},
        {name: 'Dark Slate Gray', r: 0.18, g: 0.31, b: 0.31},
        {name: 'Dark Turquoise', r: 0, g: 0.81, b: 0.82},
        {name: 'Dark Violet', r: 0.58, g: 0, b: 0.83},
        {name: 'Deep Pink', r: 1, g: 0.08, b: 0.58},
        {name: 'Deep Sky Blue', r: 0, g: 0.75, b: 1},
        {name: 'Dim Gray', r: 0.41, g: 0.41, b: 0.41},
        {name: 'Dodger Blue', r: 0.12, g: 0.56, b: 1},
        {name: 'Firebrick', r: 0.7, g: 0.13, b: 0.13},
        {name: 'Floral White', r: 1, g: 0.98, b: 0.94},
        {name: 'Forest Green', r: 0.13, g: 0.55, b: 0.13},
        {name: 'Fuchsia', r: 1, g: 0, b: 1},
        {name: 'Gainsboro', r: 0.86, g: 0.86, b: 0.86},
        {name: 'Ghost White', r: 0.97, g: 0.97, b: 1},
        {name: 'Gold', r: 1, g: 0.84, b: 0},
        {name: 'Goldenrod', r: 0.85, g: 0.65, b: 0.13},
        {name: 'Gray', r: 0.75, g: 0.75, b: 0.75},
        {name: 'Web Gray', r: 0.5, g: 0.5, b: 0.5},
        {name: 'Green', r: 0, g: 1, b: 0},
        {name: 'Web Green', r: 0, g: 0.5, b: 0},
        {name: 'Green Yellow', r: 0.68, g: 1, b: 0.18},
        {name: 'Honeydew', r: 0.94, g: 1, b: 0.94},
        {name: 'Hot Pink', r: 1, g: 0.41, b: 0.71},
        {name: 'Indian Red', r: 0.8, g: 0.36, b: 0.36},
        {name: 'Indigo', r: 0.29, g: 0, b: 0.51},
        {name: 'Ivory', r: 1, g: 1, b: 0.94},
        {name: 'Khaki', r: 0.94, g: 0.9, b: 0.55},
        {name: 'Lavender', r: 0.9, g: 0.9, b: 0.98},
        {name: 'Lavender Blush', r: 1, g: 0.94, b: 0.96},
        {name: 'Lawn Green', r: 0.49, g: 0.99, b: 0},
        {name: 'Lemon Chiffon', r: 1, g: 0.98, b: 0.8},
        {name: 'Light Blue', r: 0.68, g: 0.85, b: 0.9},
        {name: 'Light Coral', r: 0.94, g: 0.5, b: 0.5},
        {name: 'Light Cyan', r: 0.88, g: 1, b: 1},
        {name: 'Light Goldenrod', r: 0.98, g: 0.98, b: 0.82},
        {name: 'Light Gray', r: 0.83, g: 0.83, b: 0.83},
        {name: 'Light Green', r: 0.56, g: 0.93, b: 0.56},
        {name: 'Light Pink', r: 1, g: 0.71, b: 0.76},
        {name: 'Light Salmon', r: 1, g: 0.63, b: 0.48},
        {name: 'Light Sea Green', r: 0.13, g: 0.7, b: 0.67},
        {name: 'Light Sky Blue', r: 0.53, g: 0.81, b: 0.98},
        {name: 'Light Slate Gray', r: 0.47, g: 0.53, b: 0.6},
        {name: 'Light Steel Blue', r: 0.69, g: 0.77, b: 0.87},
        {name: 'Light Yellow', r: 1, g: 1, b: 0.88},
        {name: 'Lime', r: 0, g: 1, b: 0},
        {name: 'Lime Green', r: 0.2, g: 0.8, b: 0.2},
        {name: 'Linen', r: 0.98, g: 0.94, b: 0.9},
        {name: 'Magenta', r: 1, g: 0, b: 1},
        {name: 'Maroon', r: 0.69, g: 0.19, b: 0.38},
        {name: 'Web Maroon', r: 0.5, g: 0, b: 0},
        {name: 'Medium Aquamarine', r: 0.4, g: 0.8, b: 0.67},
        {name: 'Medium Blue', r: 0, g: 0, b: 0.8},
        {name: 'Medium Orchid', r: 0.73, g: 0.33, b: 0.83},
        {name: 'Medium Purple', r: 0.58, g: 0.44, b: 0.86},
        {name: 'Medium Sea Green', r: 0.24, g: 0.7, b: 0.44},
        {name: 'Medium Slate Blue', r: 0.48, g: 0.41, b: 0.93},
        {name: 'Medium Spring Green', r: 0, g: 0.98, b: 0.6},
        {name: 'Medium Turquoise', r: 0.28, g: 0.82, b: 0.8},
        {name: 'Medium Violet Red', r: 0.78, g: 0.08, b: 0.52},
        {name: 'Midnight Blue', r: 0.1, g: 0.1, b: 0.44},
        {name: 'Mint Cream', r: 0.96, g: 1, b: 0.98},
        {name: 'Misty Rose', r: 1, g: 0.89, b: 0.88},
        {name: 'Moccasin', r: 1, g: 0.89, b: 0.71},
        {name: 'Navajo White', r: 1, g: 0.87, b: 0.68},
        {name: 'Navy Blue', r: 0, g: 0, b: 0.5},
        {name: 'Old Lace', r: 0.99, g: 0.96, b: 0.9},
        {name: 'Olive', r: 0.5, g: 0.5, b: 0},
        {name: 'Olive Drab', r: 0.42, g: 0.56, b: 0.14},
        {name: 'Orange', r: 1, g: 0.65, b: 0},
        {name: 'Orange Red', r: 1, g: 0.27, b: 0},
        {name: 'Orchid', r: 0.85, g: 0.44, b: 0.84},
        {name: 'Pale Goldenrod', r: 0.93, g: 0.91, b: 0.67},
        {name: 'Pale Green', r: 0.6, g: 0.98, b: 0.6},
        {name: 'Pale Turquoise', r: 0.69, g: 0.93, b: 0.93},
        {name: 'Pale Violet Red', r: 0.86, g: 0.44, b: 0.58},
        {name: 'Papaya Whip', r: 1, g: 0.94, b: 0.84},
        {name: 'Peach Puff', r: 1, g: 0.85, b: 0.73},
        {name: 'Peru', r: 0.8, g: 0.52, b: 0.25},
        {name: 'Pink', r: 1, g: 0.75, b: 0.8},
        {name: 'Plum', r: 0.87, g: 0.63, b: 0.87},
        {name: 'Powder Blue', r: 0.69, g: 0.88, b: 0.9},
        {name: 'Purple', r: 0.63, g: 0.13, b: 0.94},
        {name: 'Web Purple', r: 0.5, g: 0, b: 0.5},
        {name: 'Rebecca Purple', r: 0.4, g: 0.2, b: 0.6},
        {name: 'Red', r: 1, g: 0, b: 0},
        {name: 'Rosy Brown', r: 0.74, g: 0.56, b: 0.56},
        {name: 'Royal Blue', r: 0.25, g: 0.41, b: 0.88},
        {name: 'Saddle Brown', r: 0.55, g: 0.27, b: 0.07},
        {name: 'Salmon', r: 0.98, g: 0.5, b: 0.45},
        {name: 'Sandy Brown', r: 0.96, g: 0.64, b: 0.38},
        {name: 'Sea Green', r: 0.18, g: 0.55, b: 0.34},
        {name: 'Seashell', r: 1, g: 0.96, b: 0.93},
        {name: 'Sienna', r: 0.63, g: 0.32, b: 0.18},
        {name: 'Silver', r: 0.75, g: 0.75, b: 0.75},
        {name: 'Sky Blue', r: 0.53, g: 0.81, b: 0.92},
        {name: 'Slate Blue', r: 0.42, g: 0.35, b: 0.8},
        {name: 'Slate Gray', r: 0.44, g: 0.5, b: 0.56},
        {name: 'Snow', r: 1, g: 0.98, b: 0.98},
        {name: 'Spring Green', r: 0, g: 1, b: 0.5},
        {name: 'Steel Blue', r: 0.27, g: 0.51, b: 0.71},
        {name: 'Tan', r: 0.82, g: 0.71, b: 0.55},
        {name: 'Teal', r: 0, g: 0.5, b: 0.5},
        {name: 'Thistle', r: 0.85, g: 0.75, b: 0.85},
        {name: 'Tomato', r: 1, g: 0.39, b: 0.28},
        {name: 'Turquoise', r: 0.25, g: 0.88, b: 0.82},
        {name: 'Violet', r: 0.93, g: 0.51, b: 0.93},
        {name: 'Wheat', r: 0.96, g: 0.87, b: 0.7},
        {name: 'White', r: 1, g: 1, b: 1},
        {name: 'White Smoke', r: 0.96, g: 0.96, b: 0.96},
        {name: 'Yellow', r: 1, g: 1, b: 0},
        {name: 'Yellow Green', r: 0.6, g: 0.8, b: 0.2}
    ];

    $.widget("wbeater.swatchpicker", {
        dialogTop: null,
        dialogHeight: null,
        color: null,
        _element: null,
        _enabled: true,
        options: {
            swatches: 'html',
            minHeight: 50,
            colorSize: 15,
            colorsPerLine: 15,
            colorType: 'name' //hex or name
        },

        _create: function () {
            var that = this;
            var onclick;
            
            this.element.attr('swatchpicker','swatchpicker');
            
            if (!$.swatchpicker.dialog) {
                $.swatchpicker.dialog = this._generateDialog();
            }

            this.element.on('click', onclick = function () {
                if (that._enabled) {
                    $.swatchpicker._element = that.element;
                    var top = that.element.offset().top;
                    var left = that.element.offset().left; //Toa do left top

                    that.dialogTop = top + that.element.outerHeight();
                    that.dialogLeft = left; // + this.element.outerWidth();

                    $.swatchpicker.dialog.css({
                        left: that.dialogLeft,
                        top: that.dialogTop,
                        display: 'block',
                    });
                }
            });
            
            this.disable = function() {
                //console.log('disable');
                that._enabled = false;
                that.element.off('click', onclick);
                //console.log(that.element.css('background-color'));
                that.element.css('background-color','');
            };

            this.enable = function() {
                //console.log('enable');
                that._enabled = true;
                that.element.on('click', onclick);
            };
        },
        
        _getWidth: function() {
            return this.options.colorSize * this.options.colorsPerLine;
        },
        _generateDialog: function () {
            var that = this;
            if (!$('#wbeater_swatchpicker_dialog').length) {
                var _container_popup = '<div id="wbeater_swatchpicker_dialog" class="ui-colorpicker ui-colorpicker-dialog ui-dialog ui-widget ui-widget-content ui-corner-all" style="margin:0px;padding:0px;display: none;"></div>';
                var dialog = $(_container_popup).appendTo('body');

                dialog.css({
                    transition: 'opacity 1s ease-in',
                    position: 'absolute',
                    display: 'none',
                    width: that._getWidth() + 'px',
                    minHeight: that.options.minHeight + 'px',
                    cursor: 'pointer',
                    'z-index': 99
                });
                dialog.mouseleave(function(){
                    $(this).css({
                        display:'none'
                    });
                });

                var html = (function () {
                    var html = '';

                    that._eachSwatch(function (name, color) {
                        var c = new $.swatchpicker.Color(color.r, color.g, color.b),
                            css = c.toCSS();
                        html += '<div class="swatch-picker" data-name="' + name + '" data-color="' + css + '" style="float:left;padding:0;margin:0;width:' + that.options.colorSize + 'px;height:' + that.options.colorSize + 'px;background-color:' + css + ';" title="' + name + '"></div>';
                    });
                    html += '<div class="swatch-picker" data-name="" data-color="" style="float:left;padding:0;margin:0;text-align: center;width:' + (that.options.colorSize * 2) + 'px;height:' + that.options.colorSize + 'px;font-size:' + (that.options.colorSize - 4) + 'px;line-height:' + that.options.colorSize + 'px;background-color:#fff;" title="Clear ͯ">clear</div>';

                    return '<div class="swatch-picker-container" style="width:' + that._getWidth() + 'px">' + html + '</div>';
                })();

                var onclick = function () {
                    that.color = that._parseColor($(this).attr('data-color')) || new $.swatchpicker.Color();
                    that._change($(this).attr('data-name'), $(this).attr('data-color'));
                };

                var part = $(html);

                $(dialog).html(part); //'.ui-colorpicker-swatches-container', 
                $('.swatch-picker', part).on('click', onclick).hover(function(){
                    $(this).css('border', '1px solid #ccc');
                }, function(){
                    $(this).css('border', 'none');
                });

//                this.disable = function (disable) {
//                    $('.ui-colorpicker-swatch', part)[disable ? 'off' : 'on']('click', onclick);
//                };

                return dialog;
            } else {
                return $('#wbeater_swatchpicker_dialog');
            }
        },
        _setOption: function (key, value) {
            this.options[key] = value;
            //$.Widget.prototype._setOption.apply(this, arguments);
        },

        _getSwatches: function () {
            if (typeof (this.options.swatches) === 'string') {
                var names = this.options.swatches.split('|');
                var swatches = [];
                
                if (names.length == 1) {
                    return $.swatchpicker.swatches[this.options.swatches];
                }
                
                for (var i in names) {
                    if ($.swatchpicker.swatches[names[i]]) {
                        swatches = swatches.concat($.swatchpicker.swatches[names[i]]);
                    }
                }
                
                return swatches;
                
            }

            if ($.isPlainObject(this.options.swatches)) {
                return this.options.swatches;
            }

            return $.swatchpicker.swatches.html;
        },

        _eachSwatch: function (callback) {
            var currentSwatches = this._getSwatches(), name;
            $.each(currentSwatches, function (nameOrIndex, swatch) {
                name = $.isArray(currentSwatches) ? swatch.name : nameOrIndex;
                return callback(name, swatch);
            });
        },

        _getSwatch: function (name) {
            var swatch = false;

            this._eachSwatch(function (swatchName, current) {
                if (swatchName.toLowerCase() == name.toLowerCase()) {
                    swatch = current;
                    return false;
                }
            });

            return swatch;
        },

        _getColor: function (name) {
            var c = this._getSwatch($.trim(name));
            if (c) {
                return new $.swatchpicker.Color(c.r, c.g, c.b);
            }
        },

        _getHexColor: function (color) {
            var m = /^#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/.exec(color);
            if (m) {
                m[4] = m[4] ? parseInt(m[4], 16) / 255 : null;
                return new $.swatchpicker.Color(
                        parseInt(m[1], 16) / 255,
                        parseInt(m[2], 16) / 255,
                        parseInt(m[3], 16) / 255,
                        m[4]
                        );
            }
        },

        _getHex3Color: function (color) {
            var m = /^#?([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})?$/.exec(color);
            if (m) {
                m[4] = m[4] ? parseInt(m[4], 16) / 255 : null;
                return new $.swatchpicker.Color(
                        parseInt(m[1], 16) / 255,
                        parseInt(m[2], 16) / 255,
                        parseInt(m[3], 16) / 255,
                        m[4]
                        );
            }
        },

        _parseColor: function (text) {
            var color = this._getHexColor(text) || this._getHex3Color(text) || false;
            return color;
        },

        _change: function (name, hex) {
            this._trigger("change", null, {color: this.color, name: name, hex: hex});
            var color = (this.options.colorType == 'hex') ? hex : name;
            
            if ($.swatchpicker._element.is('input')) {
                $.swatchpicker._element.val(color);
            }
            else if ($.swatchpicker._element.is('textarea')) {
                var val = $.swatchpicker._element.val().trim();
                
                if (val.length > 0) {
                    var ar = val.split(/\r\n|\r|\n/);
                    if (color && (ar.indexOf(color) < 0)) $.swatchpicker._element.val(val + "\r\n" + color).change();
                }
                else {
                    $.swatchpicker._element.val(color).change();
                }
            }
            else {
                $.swatchpicker._element.prev('input').val(color);
            }
            
            $.swatchpicker._element.css('background-color', color);
        }
    });

    $.swatchpicker.Color = function () {
        var spaces = {rgb: {r: 0, g: 0, b: 0},
            hsv: {h: 0, s: 0, v: 0},
            hsl: {h: 0, s: 0, l: 0},
            lab: {l: 0, a: 0, b: 0},
            cmyk: {c: 0, m: 0, y: 0, k: 1}
        };
        var a = 1;
        var illuminant = [0.9504285, 1, 1.0889]; // CIE-L*ab D65/2' 1931
        var args = arguments;
        var _clip = function (v) {
            if (isNaN(v) || v === null) {
                return 0;
            }
            if (typeof v == 'string') {
                v = parseInt(v, 10);
            }
            return Math.max(0, Math.min(v, 1));
        };
        var _hexify = function (number) {
            var number = Math.round(number),
                    digits = '0123456789abcdef',
                    lsd = number % 16,
                    msd = (number - lsd) / 16,
                    hexified = digits.charAt(msd) + digits.charAt(lsd);
            return hexified;
        };
        var _rgb_to_xyz = function (rgb) {
            var r = (rgb.r > 0.04045) ? Math.pow((rgb.r + 0.055) / 1.055, 2.4) : rgb.r / 12.92,
                    g = (rgb.g > 0.04045) ? Math.pow((rgb.g + 0.055) / 1.055, 2.4) : rgb.g / 12.92,
                    b = (rgb.b > 0.04045) ? Math.pow((rgb.b + 0.055) / 1.055, 2.4) : rgb.b / 12.92;

            return {
                x: r * 0.4124 + g * 0.3576 + b * 0.1805,
                y: r * 0.2126 + g * 0.7152 + b * 0.0722,
                z: r * 0.0193 + g * 0.1192 + b * 0.9505
            };
        };
        var _xyz_to_rgb = function (xyz) {
            var rgb = {
                r: xyz.x * 3.2406 + xyz.y * -1.5372 + xyz.z * -0.4986,
                g: xyz.x * -0.9689 + xyz.y * 1.8758 + xyz.z * 0.0415,
                b: xyz.x * 0.0557 + xyz.y * -0.2040 + xyz.z * 1.0570
            };

            rgb.r = (rgb.r > 0.0031308) ? 1.055 * Math.pow(rgb.r, (1 / 2.4)) - 0.055 : 12.92 * rgb.r;
            rgb.g = (rgb.g > 0.0031308) ? 1.055 * Math.pow(rgb.g, (1 / 2.4)) - 0.055 : 12.92 * rgb.g;
            rgb.b = (rgb.b > 0.0031308) ? 1.055 * Math.pow(rgb.b, (1 / 2.4)) - 0.055 : 12.92 * rgb.b;

            return rgb;
        };
        var _rgb_to_hsv = function (rgb) {
            var minVal = Math.min(rgb.r, rgb.g, rgb.b),
                    maxVal = Math.max(rgb.r, rgb.g, rgb.b),
                    delta = maxVal - minVal,
                    del_R, del_G, del_B,
                    hsv = {
                        h: 0,
                        s: 0,
                        v: maxVal
                    };

            if (delta === 0) {
                hsv.h = 0;
                hsv.s = 0;
            } else {
                hsv.s = delta / maxVal;

                del_R = (((maxVal - rgb.r) / 6) + (delta / 2)) / delta;
                del_G = (((maxVal - rgb.g) / 6) + (delta / 2)) / delta;
                del_B = (((maxVal - rgb.b) / 6) + (delta / 2)) / delta;

                if (rgb.r === maxVal) {
                    hsv.h = del_B - del_G;
                } else if (rgb.g === maxVal) {
                    hsv.h = (1 / 3) + del_R - del_B;
                } else if (rgb.b === maxVal) {
                    hsv.h = (2 / 3) + del_G - del_R;
                }

                if (hsv.h < 0) {
                    hsv.h += 1;
                } else if (hsv.h > 1) {
                    hsv.h -= 1;
                }
            }

            return hsv;
        };
        var _hsv_to_rgb = function (hsv) {
            var rgb = {
                r: 0,
                g: 0,
                b: 0
            },
                    var_h,
                    var_i,
                    var_1,
                    var_2,
                    var_3;

            if (hsv.s === 0) {
                rgb.r = rgb.g = rgb.b = hsv.v;
            } else {
                var_h = hsv.h === 1 ? 0 : hsv.h * 6;
                var_i = Math.floor(var_h);
                var_1 = hsv.v * (1 - hsv.s);
                var_2 = hsv.v * (1 - hsv.s * (var_h - var_i));
                var_3 = hsv.v * (1 - hsv.s * (1 - (var_h - var_i)));

                if (var_i === 0) {
                    rgb.r = hsv.v;
                    rgb.g = var_3;
                    rgb.b = var_1;
                } else if (var_i === 1) {
                    rgb.r = var_2;
                    rgb.g = hsv.v;
                    rgb.b = var_1;
                } else if (var_i === 2) {
                    rgb.r = var_1;
                    rgb.g = hsv.v;
                    rgb.b = var_3;
                } else if (var_i === 3) {
                    rgb.r = var_1;
                    rgb.g = var_2;
                    rgb.b = hsv.v;
                } else if (var_i === 4) {
                    rgb.r = var_3;
                    rgb.g = var_1;
                    rgb.b = hsv.v;
                } else {
                    rgb.r = hsv.v;
                    rgb.g = var_1;
                    rgb.b = var_2;
                }
            }

            return rgb;
        };
        var _rgb_to_hsl = function (rgb) {
            var minVal = Math.min(rgb.r, rgb.g, rgb.b),
                    maxVal = Math.max(rgb.r, rgb.g, rgb.b),
                    delta = maxVal - minVal,
                    del_R, del_G, del_B,
                    hsl = {
                        h: 0,
                        s: 0,
                        l: (maxVal + minVal) / 2
                    };

            if (delta === 0) {
                hsl.h = 0;
                hsl.s = 0;
            } else {
                hsl.s = hsl.l < 0.5 ? delta / (maxVal + minVal) : delta / (2 - maxVal - minVal);

                del_R = (((maxVal - rgb.r) / 6) + (delta / 2)) / delta;
                del_G = (((maxVal - rgb.g) / 6) + (delta / 2)) / delta;
                del_B = (((maxVal - rgb.b) / 6) + (delta / 2)) / delta;

                if (rgb.r === maxVal) {
                    hsl.h = del_B - del_G;
                } else if (rgb.g === maxVal) {
                    hsl.h = (1 / 3) + del_R - del_B;
                } else if (rgb.b === maxVal) {
                    hsl.h = (2 / 3) + del_G - del_R;
                }

                if (hsl.h < 0) {
                    hsl.h += 1;
                } else if (hsl.h > 1) {
                    hsl.h -= 1;
                }
            }

            return hsl;
        };
        var _hsl_to_rgb = function (hsl) {
            var var_1,
                    var_2,
                    hue_to_rgb = function (v1, v2, vH) {
                        if (vH < 0) {
                            vH += 1;
                        }
                        if (vH > 1) {
                            vH -= 1;
                        }
                        if ((6 * vH) < 1) {
                            return v1 + (v2 - v1) * 6 * vH;
                        }
                        if ((2 * vH) < 1) {
                            return v2;
                        }
                        if ((3 * vH) < 2) {
                            return v1 + (v2 - v1) * ((2 / 3) - vH) * 6;
                        }
                        return v1;
                    };

            if (hsl.s === 0) {
                return {
                    r: hsl.l,
                    g: hsl.l,
                    b: hsl.l
                };
            }

            var_2 = (hsl.l < 0.5) ? hsl.l * (1 + hsl.s) : (hsl.l + hsl.s) - (hsl.s * hsl.l);
            var_1 = 2 * hsl.l - var_2;

            return {
                r: hue_to_rgb(var_1, var_2, hsl.h + (1 / 3)),
                g: hue_to_rgb(var_1, var_2, hsl.h),
                b: hue_to_rgb(var_1, var_2, hsl.h - (1 / 3))
            };
        };
        var _xyz_to_lab = function (xyz) {
            var x = xyz.x / illuminant[0],
                    y = xyz.y / illuminant[1],
                    z = xyz.z / illuminant[2];

            x = (x > 0.008856) ? Math.pow(x, (1 / 3)) : (7.787 * x) + (16 / 116);
            y = (y > 0.008856) ? Math.pow(y, (1 / 3)) : (7.787 * y) + (16 / 116);
            z = (z > 0.008856) ? Math.pow(z, (1 / 3)) : (7.787 * z) + (16 / 116);

            return {
                l: ((116 * y) - 16) / 100, // [0,100]
                a: ((500 * (x - y)) + 128) / 255, // [-128,127]
                b: ((200 * (y - z)) + 128) / 255	// [-128,127]
            };
        },
                _lab_to_xyz = function (lab) {
                    var lab2 = {
                        l: lab.l * 100,
                        a: (lab.a * 255) - 128,
                        b: (lab.b * 255) - 128
                    },
                            xyz = {
                                x: 0,
                                y: (lab2.l + 16) / 116,
                                z: 0
                            };

                    xyz.x = lab2.a / 500 + xyz.y;
                    xyz.z = xyz.y - lab2.b / 200;

                    xyz.x = (Math.pow(xyz.x, 3) > 0.008856) ? Math.pow(xyz.x, 3) : (xyz.x - 16 / 116) / 7.787;
                    xyz.y = (Math.pow(xyz.y, 3) > 0.008856) ? Math.pow(xyz.y, 3) : (xyz.y - 16 / 116) / 7.787;
                    xyz.z = (Math.pow(xyz.z, 3) > 0.008856) ? Math.pow(xyz.z, 3) : (xyz.z - 16 / 116) / 7.787;

                    xyz.x *= illuminant[0];
                    xyz.y *= illuminant[1];
                    xyz.z *= illuminant[2];

                    return xyz;
                };
        var _rgb_to_cmy = function (rgb) {
            return {
                c: 1 - (rgb.r),
                m: 1 - (rgb.g),
                y: 1 - (rgb.b)
            };
        };
        var _cmy_to_rgb = function (cmy) {
            return {
                r: 1 - (cmy.c),
                g: 1 - (cmy.m),
                b: 1 - (cmy.y)
            };
        };
        var _cmy_to_cmyk = function (cmy) {
            var K = 1;

            if (cmy.c < K) {
                K = cmy.c;
            }
            if (cmy.m < K) {
                K = cmy.m;
            }
            if (cmy.y < K) {
                K = cmy.y;
            }

            if (K === 1) {
                return {
                    c: 0,
                    m: 0,
                    y: 0,
                    k: 1
                };
            }

            return {
                c: (cmy.c - K) / (1 - K),
                m: (cmy.m - K) / (1 - K),
                y: (cmy.y - K) / (1 - K),
                k: K
            };
        };
        var _cmyk_to_cmy = function (cmyk) {
            return {
                c: cmyk.c * (1 - cmyk.k) + cmyk.k,
                m: cmyk.m * (1 - cmyk.k) + cmyk.k,
                y: cmyk.y * (1 - cmyk.k) + cmyk.k
            };
        };

        this.set = false;

        this.setAlpha = function (_a) {
            if (_a !== null) {
                a = _clip(_a);
            }
            this.set = true;

            return this;
        };

        this.getAlpha = function () {
            return a;
        };

        this.setRGB = function (r, g, b) {
            spaces = {rgb: this.getRGB()};
            if (r !== null) {
                spaces.rgb.r = _clip(r);
            }
            if (g !== null) {
                spaces.rgb.g = _clip(g);
            }
            if (b !== null) {
                spaces.rgb.b = _clip(b);
            }
            this.set = true;

            return this;
        };

        this.getChannel = function (channel) {
            switch (channel) {
                case 'h':
                case 's':
                case 'v':
                    return this.getHSV()[channel];

                case 'r':
                case 'g':
                case 'b':
                    return this.getRGB()[channel];

                case 'a':
                    return this.getAlpha();
            }

            return null;
        };

        this.setChannel = function (channel, value) {
            switch (channel) {
                case 'h':
                    return this.setHSV(value, null, null);

                case 's':
                    return this.setHSV(null, value, null);

                case 'v':
                    return this.setHSV(null, null, value);

                case 'r':
                    return this.setRGB(value, null, null);

                case 'g':
                    return this.setRGB(null, value, null);

                case 'b':
                    return this.setRGB(null, null, value);

                case 'a':
                    return this.setAlpha(value);
            }

            return this;
        };

        this.setHSV = function (h, s, v) {
            spaces = {hsv: this.getHSV()};
            if (h !== null) {
                spaces.hsv.h = _clip(h);
            }
            if (s !== null) {
                spaces.hsv.s = _clip(s);
            }
            if (v !== null) {
                spaces.hsv.v = _clip(v);
            }
            this.set = true;

            return this;
        };

        this.setHSL = function (h, s, l) {
            spaces = {hsl: this.getHSL()};
            if (h !== null) {
                spaces.hsl.h = _clip(h);
            }
            if (s !== null) {
                spaces.hsl.s = _clip(s);
            }
            if (l !== null) {
                spaces.hsl.l = _clip(l);
            }
            this.set = true;

            return this;
        };

        this.setLAB = function (l, a, b) {
            spaces = {lab: this.getLAB()};
            if (l !== null) {
                spaces.lab.l = _clip(l);
            }
            if (a !== null) {
                spaces.lab.a = _clip(a);
            }
            if (b !== null) {
                spaces.lab.b = _clip(b);
            }
            this.set = true;

            return this;
        };

        this.setCMYK = function (c, m, y, k) {
            spaces = {cmyk: this.getCMYK()};
            if (c !== null) {
                spaces.cmyk.c = _clip(c);
            }
            if (m !== null) {
                spaces.cmyk.m = _clip(m);
            }
            if (y !== null) {
                spaces.cmyk.y = _clip(y);
            }
            if (k !== null) {
                spaces.cmyk.k = _clip(k);
            }
            this.set = true;

            return this;
        };

        this.getRGB = function () {
            if (!spaces.rgb) {
                spaces.rgb = spaces.lab ? _xyz_to_rgb(_lab_to_xyz(spaces.lab))
                        : spaces.hsv ? _hsv_to_rgb(spaces.hsv)
                        : spaces.hsl ? _hsl_to_rgb(spaces.hsl)
                        : spaces.cmyk ? _cmy_to_rgb(_cmyk_to_cmy(spaces.cmyk))
                        : {r: 0, g: 0, b: 0};
                spaces.rgb.r = _clip(spaces.rgb.r);
                spaces.rgb.g = _clip(spaces.rgb.g);
                spaces.rgb.b = _clip(spaces.rgb.b);
            }
            return $.extend({}, spaces.rgb);
        };

        this.getHSV = function () {
            if (!spaces.hsv) {
                spaces.hsv = spaces.lab ? _rgb_to_hsv(this.getRGB())
                        : spaces.rgb ? _rgb_to_hsv(spaces.rgb)
                        : spaces.hsl ? _rgb_to_hsv(this.getRGB())
                        : spaces.cmyk ? _rgb_to_hsv(this.getRGB())
                        : {h: 0, s: 0, v: 0};
                spaces.hsv.h = _clip(spaces.hsv.h);
                spaces.hsv.s = _clip(spaces.hsv.s);
                spaces.hsv.v = _clip(spaces.hsv.v);
            }
            return $.extend({}, spaces.hsv);
        };

        this.getHSL = function () {
            if (!spaces.hsl) {
                spaces.hsl = spaces.rgb ? _rgb_to_hsl(spaces.rgb)
                        : spaces.hsv ? _rgb_to_hsl(this.getRGB())
                        : spaces.cmyk ? _rgb_to_hsl(this.getRGB())
                        : spaces.hsv ? _rgb_to_hsl(this.getRGB())
                        : {h: 0, s: 0, l: 0};
                spaces.hsl.h = _clip(spaces.hsl.h);
                spaces.hsl.s = _clip(spaces.hsl.s);
                spaces.hsl.l = _clip(spaces.hsl.l);
            }
            return $.extend({}, spaces.hsl);
        };

        this.getCMYK = function () {
            if (!spaces.cmyk) {
                spaces.cmyk = spaces.rgb ? _cmy_to_cmyk(_rgb_to_cmy(spaces.rgb))
                        : spaces.hsv ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB()))
                        : spaces.hsl ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB()))
                        : spaces.lab ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB()))
                        : {c: 0, m: 0, y: 0, k: 1};
                spaces.cmyk.c = _clip(spaces.cmyk.c);
                spaces.cmyk.m = _clip(spaces.cmyk.m);
                spaces.cmyk.y = _clip(spaces.cmyk.y);
                spaces.cmyk.k = _clip(spaces.cmyk.k);
            }
            return $.extend({}, spaces.cmyk);
        };

        this.getLAB = function () {
            if (!spaces.lab) {
                spaces.lab = spaces.rgb ? _xyz_to_lab(_rgb_to_xyz(spaces.rgb))
                        : spaces.hsv ? _xyz_to_lab(_rgb_to_xyz(this.getRGB()))
                        : spaces.hsl ? _xyz_to_lab(_rgb_to_xyz(this.getRGB()))
                        : spaces.cmyk ? _xyz_to_lab(_rgb_to_xyz(this.getRGB()))
                        : {l: 0, a: 0, b: 0};
                spaces.lab.l = _clip(spaces.lab.l);
                spaces.lab.a = _clip(spaces.lab.a);
                spaces.lab.b = _clip(spaces.lab.b);
            }
            return $.extend({}, spaces.lab);
        };

        this.getChannels = function () {
            return {
                r: this.getRGB().r,
                g: this.getRGB().g,
                b: this.getRGB().b,
                a: this.getAlpha(),
                h: this.getHSV().h,
                s: this.getHSV().s,
                v: this.getHSV().v,
                c: this.getCMYK().c,
                m: this.getCMYK().m,
                y: this.getCMYK().y,
                k: this.getCMYK().k,
                L: this.getLAB().l,
                A: this.getLAB().a,
                B: this.getLAB().b
            };
        };

        this.getSpaces = function () {
            return $.extend(true, {}, spaces);
        };

        this.distance = function (color) {
            var space = 'lab',
                    getter = 'get' + space.toUpperCase(),
                    a = this[getter](),
                    b = color[getter](),
                    distance = 0,
                    channel;

            for (channel in a) {
                distance += Math.pow(a[channel] - b[channel], 2);
            }

            return distance;
        };

        this.equals = function (color) {
            if (color) {
                var a = this.getRGB(),
                        b = color.getRGB();

                return this.set === color.set
                        && this.getAlpha() === color.getAlpha()
                        && a.r === b.r
                        && a.g === b.g
                        && a.b === b.b;
            }
            return false;
        };

        this.limit = function (steps) {
            steps -= 1;
            var rgb = this.getRGB();
            this.setRGB(
                    Math.round(rgb.r * steps) / steps,
                    Math.round(rgb.g * steps) / steps,
                    Math.round(rgb.b * steps) / steps
                    );
        };

        this.toHex = function () {
            var rgb = this.getRGB();
            return _hexify(rgb.r * 255) + _hexify(rgb.g * 255) + _hexify(rgb.b * 255);
        };

        this.toCSS = function () {
            return '#' + this.toHex();
        };

        this.copy = function () {
            var color = new $.colorpicker.Color(this.getSpaces(), this.getAlpha());
            color.set = this.set;
            return color;
        };

        // Construct
        if (args.length === 2) {
            spaces = args[0];
            this.setAlpha(args[1] === 0 ? 0 : args[1] || 1);
            this.set = true;
        }
        if (args.length > 2) {
            this.setRGB(args[0], args[1], args[2]);
            this.setAlpha(args[3] === 0 ? 0 : args[3] || 1);
            this.set = true;
        }
    };

});
