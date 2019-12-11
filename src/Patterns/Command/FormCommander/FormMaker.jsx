import FormContext from "../../ValueObject/FormContext";
import ResourceConfig from "../../Facade/ResourceConfig";
import FormState from "../../ValueObject/FormState";
import FormBuilder from "../../Builder/FormBuilder/FormBuilder";
import FormDirector from "../../Builder/FormBuilder/FormDirector";

/**
 * @abstract
 */
export default class FormMaker {
    displayName = 'FormMaker';

    _receiver;
    _renderedFields;
    _formComponent;
    _formContext;
    _route = {
        config: {},
    };
    _form = {
        component: null,
        context: null,
        state: null,
    };

    constructor(receiver) {
        this._receiver = receiver;
    }

    makeForm = (formName) => {
        this._prepareForm(formName);
        this._receiver.config = this._prepareRouteConfig();
    };

    _prepare = {
        form: {
            component: () => {
                const formBuilder = new FormBuilder(this._form.context);
                const formDirector = new FormDirector(formBuilder);
                // Log.warning({
                //     this:         this,
                //     formBuilder:  formBuilder,
                //     formDirector: formDirector,
                // });
                this._form.component = formDirector.createForm();
            },
            context: (formName) => {
                const resourceConfig = new ResourceConfig();
                const formConfig = resourceConfig.getFormConfig(formName);
                this._form.context = new FormContext(
                    {
                        form: formConfig,
                        render: {
                            fields: this._renderedFields,
                        },
                    },
                    this._receiver.options.props,
                    new FormState(formName, formConfig),
                );
            },
            state: (formName) => {
                // Log.startProcess('prepare form state');
                // Log.intention(this.displayName,
                //     `Here we need to prepare initial form[${formName}] state`,
                //     `How can we do that?`,
                //     `We have this =`, this,
                // );
                // Log.todo(this.displayName,
                //     `Prepare state for two cases:`,
                //     ` - 'new' form`,
                //     ` - 'edit' form`,
                // );
                // Log.effect(this.displayName,
                //     `For now we don't have any effect!`,
                // );
                // Log.endProcess();
            },
        },
        routeConfig: () => {
        },
    };

    _prepareForm = (formName) => {
        this._prepare.form.context(formName);
        this._prepare.form.state(formName);
        // TODO: the third parameter in the new FormContext () call above to consider
        // 1° new:
        // - dane - default form - read from configuration
        // - errors - error messages - they will not be initiated here unless we operate on the event history
        // 2° edit:
        // - data - read from TODO resources: specify where the resources will be and what access they will have
        // - errors - error messages - they will not be initiated here unless we operate on the event history
        this._prepare.form.component();
    };

    _prepareRouteConfig = () => {
        // Log.log({
        //     this:        this,
        //     _formConfig: this._form.context.config,
        // });
        if (this._form.context.config.form.decorator) {

            //TODO: This needs to be transferred to the builder
            // this._formComponent.addDecorator(this._formContext.config.form.decorator);

            this._route.config[this._form.context.config.form.decorator] = {
                component: this._form.component,
            };
        } else {
            this._route.config.component = this._form.component;
        }
        return this._route.config;
    }

}
