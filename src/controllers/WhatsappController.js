class WhatsAppController {
    constructor(){
        
        this.elementsPrototype();
        this.loadElements();
        this.initEvents();
    }

    loadElements () {
        this.el = {};
        document.querySelectorAll('[id]').forEach((element) => {
            this.el[Format.getCamelCase(element.id)] = element;
        })
    }

    initEvents() {
        this.el.myPhoto.on('click', e => {
            this.closeLeftPanel();
            this.el.panelEditProfile.show();
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 100);
        });
        this.el.btnNewContact.on('click', e => {
            this.closeLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 100);
        });
        this.el.btnClosePanelEditProfile.on('click', e => {
            this.el.panelEditProfile.removeClass('open');
        });
        this.el.btnClosePanelAddContact.on('click', e => {
            this.el.panelAddContact.removeClass('open');
        });
    }

    closeLeftPanel(){
        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();
    }

    elementsPrototype () {

        Element.prototype.hide = function () {
            this.style.display = 'none';
            return this;
        }
        Element.prototype.show = function (){
            this.style.display = 'block';
            return this;
        }
        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none' ? 'block' : 'none');
            return this;
        }
        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach((event) => {
                this.addEventListener(event, fn)
            });
            return this;
        }
        Element.prototype.css = function (styles) {
            for (let style in styles){
                this.style[style] = styles[style];
            }
            return this;
        }
        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }
        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }
        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }
        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);
        }
    }
}