import React from "react";
import {connect} from "react-redux";
import {Button, Select} from "./Form/Control";
// import BaseForm from "../forms/BaseForm";
import * as Helper from "./../../helper/Helper";
// import {saga} from "../../saga/action/saga";
// import {handleControlChange} from "../../redux/action/form";

export class FrontPage {
    constructor() {
        this.state = {
            form:           {
                company: parent.api.entity.company ? parent.api.entity.company : '',
            },
            companyOptions: Helper.formatOptions('companyName', parent.api.entity.companies),
        };
        if (parent.api.company) {
            this.state.form.address = Helper.parseAddress(parent.api.entity.company);
            this.state.form.foundingDate = Helper.formatDate(parent.api.entity.company.foundingDate);
        }
    }
    
    
    render() {
        this.state.form.company = parent.api.entity.companies ? parent.api.entity.companies[0] : '';
        // console.log('company', parent.api.company);
        this.state.companyOptions = Helper.formatOptions('companyName', parent.api.entity.companies);
        return (
            <React.Fragment>
                <div className="kpir-front-page">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 data-widget="data" className="position-absolute w-100 pr-4">
                                <small className="float-right ">
                                    {(parent.api.current.date).toISOString().slice(0, 10)}
                                </small>
                            </h2>
                            <h1>
                                Księga Przychodów i rozchodów
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"/>
                        <div className="col-4">
                            <Select id="kpir_company_select" name="company"
                                    value={parent.api.entity.company ? parent.api.entity.company['id'] : ''}
                                    onChange={(e) => this.props.handleControlChange(e, this.state)}
                                    options={this.state.companyOptions}
                                    required={true}
                                    label="(Imię i nazwisko (Firma))"
                                    labelBelow={'signature'}
                                    wrapperClass="w-100"
                                    error={this._errorMessage('companyName')}
                                    append={[
                                        (
                                            <Button key="0" id="company-configuration"
                                                    data-action={`companies-${parent.api.entity.company ? 'edit' : 'new'}`}
                                                    data-title="Company configuration"
                                                    onClick={this.props.modalOpen}
                                                    controlClass="btn-secondary"
                                                    wrapperControlClass="input-group-prepend"
                                            ><i className="fa fa-cog"/></Button>
                                        ),
                                    ]}
                            />
                        </div>
                        <div className="col-4">
                            {parent.api.entity.company && (
                                <div className="label-below-signature no-control text-center"
                                     data-label-below="(adres)">
                                    {parent.api.entity.company && Helper.parseAddress(parent.api.entity.company)}
                                </div>
                            )}
                        </div>
                        <div className="col-2"/>
                    </div>
                    {parent.api.entity.company && (
                        <div className="row">
                            <div className="col-6"/>
                            <div className="col-4">
                                <div className="label-below-signature no-control text-center"
                                     data-label-below="(Data założenia)">
                                    {parent.api.entity.company && Helper.formatDate(parent.api.entity.company['foundingDate'])}
                                </div>
                            </div>
                            <div className="col-2"/>
                        </div>
                    )}
                </div>
                <hr/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        modalOpen:  (e) => dispatch(saga.modal.open(e)),
        modalClose: () => dispatch(saga.modal.close()),
        
        handleControlChange: (e, state) => dispatch(handleControlChange(e, state)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);