import {newslist} from '../data/newslist.js'

export default class newsSection {
    constructor( options = {}) {
        this.newsList = newslist || []
        this.currentIndex = 0
        this.element = Object.assign( this.getDefaults() , options)
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
        const el = this.element
        this.getNewsHtml = fnNewsListTemplate

        this.render( el.companyWrap , fnNewsCompanyList( this.newsList))
            .currentActive( this.currentIndex)
            .render( el.newsWrap , this.getNewsHtml( this.getCurrentNews()))

        this.addEvents()
        return this
    }

    getDefaults () {
        return {
            newsWrap : document.querySelector('.mainArea section.content'),
            companyWrap  : document.querySelector('.mainArea .newsNavigation'),
            buttonWrap : document.querySelector('.btn'),
            nextButton : document.querySelector('.btn .right a'),
            prevButton : document.querySelector('.btn .left a'),
        }
    }
    getCurrentNews () {
        return this.newsList[ this.currentIndex]
    }

    setCurrentIndex( index) {
        const companyLength = this.element.companyWrap.querySelectorAll('li').length
        if( index>=companyLength || index === undefined) index = 0
        else if( index <0) index = companyLength-1
        this.currentIndex = index
        return this
    }
    currentActive ( index , element = this.element.companyWrap) {
        const active = element.querySelector('li.active')
        active && this.removeClass( active,'active')
        this.setCurrentIndex( index)
            .addClass( element.querySelectorAll('li')[ this.currentIndex] , 'active')
        return this
    }

    addClass(element,classname='') {
        element.classList.add( classname)
        return this
    }
    removeClass(element,classname='') {
        element.classList.remove( classname)
        return this
    }

    addEvents() {
        const that = this , el = that.element

        el.companyWrap.addEventListener('click' , function(e){
            e.preventDefault()

            const target = e.target
            if( target.nodeName !== 'A') return
            that.currentIndex = [ ...this.closest('ul').querySelectorAll( target.nodeName) ].indexOf( target)
            that.currentActive( that.currentIndex)
                .render( el.newsWrap , that.getNewsHtml( that.getCurrentNews()))
        })
        el.buttonWrap.addEventListener('click' , function(e){
            e.preventDefault()
            const target = e.target
            if( target === el.nextButton) that.currentIndex++
            else if( target === el.prevButton) that.currentIndex--

            that.currentActive( that.currentIndex)
                .render( el.newsWrap , that.getNewsHtml( that.getCurrentNews()))
        })
    }

    render ( element ,  html='') {
        element.innerHTML = html
        return this
    }
}
