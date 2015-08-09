/**
 * jquery.slimmenu.js
 * http://adnantopal.github.io/slimmenu/
 * Author: @adnantopal
 * Copyright 2013, Adnan Topal (atopal.com)
 * Licensed under the MIT license.
 */
 $.easing.jswing = $.easing.swing;

$.extend($.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

 
 
;(function ( $, window, document, undefined )
{
    var pluginName = "slimmenu",
        defaults =
        {
            resizeWidth: '900',
            collapserTitle: 'Main Menu',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;&nbsp;'
        };

    function Plugin( element, options )
    {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var $options = this.options,
                $menu = this.$elem,
                $collapser = '<div class="menu-collapser">'+$options.collapserTitle+'<div class="collapse-button mobile"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>',
                $menu_collapser;

            $menu.before($collapser);
            $menu_collapser = $menu.prev('.menu-collapser');

            $menu.on('click', '.sub-collapser', function(e)
            {
                e.preventDefault();
                e.stopPropagation();

                var $parent_li = $(this).closest('li');

                if ($(this).hasClass('expanded'))
                {
                    $(this).removeClass('expanded');
                    $(this).find('i').html('&#9660;');
                    $parent_li.find('>ul').slideUp($options.animSpeed, $options.easingEffect);
                }
                else
                {
                    $(this).addClass('expanded');
                    $(this).find('i').html('&#9650;');
                    $parent_li.find('>ul').slideDown($options.animSpeed, $options.easingEffect);
                }
            });

            $menu_collapser.on('click', '.collapse-button', function(e)
            {
                e.preventDefault();
                $menu.slideToggle($options.animSpeed, $options.easingEffect);
            });

            this.resizeMenu({ data: { el: this.element, options: this.options } });
            $(window).on('resize', { el: this.element, options: this.options }, this.resizeMenu);
        },

        resizeMenu: function(event)
        {
            var $window = $(window),
                $options = event.data.options,
                $menu = $(event.data.el),
                $menu_collapser = $('body').find('.menu-collapser');

            $menu.find('li').each(function()
            {
                if ($(this).has('ul').length)
                {
                    if ($(this).has('.sub-collapser').length)
                    {
                        $(this).children('.sub-collapser i').html('&#9660;');
                    }
                    else
                    {
                        $(this).append('<span class="sub-collapser"><i>&#9660;</i></span>');
                    }
                }

                $(this).children('ul').hide();
                $(this).find('.sub-collapser').removeClass('expanded').children('i').html('&#9660;');
            });

            if ($options.resizeWidth >= $window.width())
            {
                if ($options.indentChildren)
                {
                    $menu.find('ul').each(function()
                    {
                        var $depth = $(this).parents('ul').length;
                        if (!$(this).children('li').children('a').has('i').length)
                        {
                            $(this).children('li').children('a').prepend(Plugin.prototype.indent($depth, $options));
                        }
                    });
                }

                $menu.find('li').has('ul').off('mouseenter mouseleave');
                $menu.addClass('collapsed').hide();
                $menu_collapser.show();
            }
            else
            {
                $menu.find('li').has('ul').on('mouseenter', function()
                {
                    $(this).find('>ul').stop().slideDown($options.animSpeed, $options.easingEffect);
                })
                .on('mouseleave', function()
                {
                    $(this).find('>ul').stop().slideUp($options.animSpeed, $options.easingEffect);
                });

                $menu.find('li > a > i').remove();
                $menu.removeClass('collapsed').show();
                $menu_collapser.hide();
            }
        },

        indent: function(num, options)
        {
            var $indent = '';
            for (var i=0; i < num; i++)
            {
                $indent += options.childrenIndenter;
            }
            return '<i>'+$indent+'</i>';
        }
    };

    $.fn[pluginName] = function ( options )
    {
        return this.each(function ()
        {
            if (!$.data(this, "plugin_" + pluginName))
            {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );