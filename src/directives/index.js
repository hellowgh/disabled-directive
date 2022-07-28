import disabledDirective from "./disabledDirective";

const allDirective = {
    disabled: disabledDirective
}

const directives = {
    install(app) {
        Object.keys(allDirective).forEach(key => {
            app.directive(key, allDirective[key])
        });
    }
}

export default directives