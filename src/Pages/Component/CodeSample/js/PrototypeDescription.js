import React from "react";
import {Block} from "framework7-react";
import Highlight from 'react-highlight';

const PrototypeDescription = () => (
    <Block>
        <p>When creating an application with a form system, just creating a form with simple controls turned out to be
            be not enough. That's why I thought that the form would be built based on the fields it contains,
            however, treating it as an abstract creation that may have its own custom substructures and functionalities.
            In this way, I decided to create field widgets that reflect and serve expectations
            user in the context of using the form.</p>
        <p>I came up with several types of fields, which as a result correspond to the types of widgets placed in the
            target form component. Because any type of field may appear several times in the form, but
            apply to other fields of the form and therefore data, I used to implement this idea
            the <b>Prototype</b> pattern.</p>
        <p>As everyone (certainly most) knows, JavaScript is a language based on this design pattern. In principle,
            every object in JS is a prototype. For this reason, when creating these widgets, I took many steps back and
            forth to achieve the effect without violating core language standards.</p>
        <p>Ultimately, all this dance with the code was a success. When creating a new form, all you have to do is write
            something like:</p>
        <Highlight language="javascript">{`<form>
    <FieldWidget fieldName={someFieldName} data={{some: 'JSON data'}}/>
    <CollectionWidget fieldName={collectionFieldName} data={{some: 'JSON data'}}/>
    <FieldWidget fieldName={differentFieldName} data={{some: 'JSON data'}}/>
</form>
`}</Highlight>

    </Block>
);
export default PrototypeDescription;