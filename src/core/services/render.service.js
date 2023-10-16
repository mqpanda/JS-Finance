import ChildComponent from "../component/child.component"

class RenderService {
  /**
   * @param {string} html
   * @param {Array} components
   * @param {Object} [styles]
   * @returns {HTMLElement}
   */
  htmlToElement(html, components = [], styles){
    const template = document.createElement('template')
    template.innerHTML = html.trim()


    const element = template.content.firstChild

    //styles

    this.#replaceComponentTags(element, components)

    console.log(element)

    return element
  }

  /**
   * @param {HTMLElement} parentElement
   * @param {Array} components
   */
  #replaceComponentTags(parentElement, components){
    const componentTagPattern = /^component-/
    const allElements = parentElement.getElementsByTagName('*')

    for (const element of allElements) {
      const elementTagName = element.tagName.toLowerCase
      if (componentTagPattern.test(elementTagName)){
        const componentName = element.tagName
          .replace(componentTagPattern, '')
          .replace(/-/g, '')

        const foundComponent = components.find(Component => {
          const instance = 
            Component instanceof ChildComponent ? Component : new
            Component()
          return instance.constructor.name.toLowerCase() == componentName
          
        })
      }
    }
  }
}

export default new RenderService()