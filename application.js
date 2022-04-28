import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
import { Application } from "@hotwired/stimulus"

const application = Application.start()

application.debug = false
window.Stimulus   = application

export { application }

lazyLoadControllersFrom("controllers", application)