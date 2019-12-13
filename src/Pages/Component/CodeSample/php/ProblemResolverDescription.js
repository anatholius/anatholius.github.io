import React from "react";
import {Block} from "framework7-react";


const ProblemResolverDescription = () => (
    <Block>
        <p>About half a year ago, I studied the structure of basic implementation whereby the income and expenditure ledger was strictly based on legal provisions. I also read programming of best practices that got stuck in the topic of problem solving. As it turned out, solving problems not necessarily programming, is a broad sphere in which psychologists would have the most to say. I came across an interesting site (skillyouneed.com) where I read a lot about it. It was the first impulse to design such an application that in a properly structured way would help to solve any problem. I developed an application structure that included the entire problem solving process.</p>
        <p>How is this supposed to work?</p>
        <p>The basic structure of the problem description consists of:
            <ul>
                <li>- title - (string)</li>
                <li>- description (text)</li>
                <li>- goals (collection, complex) - this is to be a type of TODO letter to achieve a solution to the
                    problem
                </li>
                <li>- obstacles (collection, complex) - elements that will require additional attention to the
                    solution
                </li>
                <li>- opportunities (collection, complex) - elements in the process of solving the problem that in any
                    way can lead to incidental profits.
                </li>
                <li>- solution (structure, complex) - documentation that is to be a summary of the results achieved from
                    the problem solving process.
                </li>
            </ul>
        </p>
        <p>Each complex property has a structure that looks similar to this, but contains information only in its
            context. Any element of any collection in this structure can be marked as a task. At this point, a task will
            be created whose structure would be similar to tasks in popular workflow systems.</p>
        <p>Each property can have expressions that may require further explanation. This expression would be marked as
            part of the dictionary. The dictionary element would contain explanatory fields in its structure. This way a
            dictionary would be built on the basis of a project encyclopedia (something like wikipedia).</p>
    </Block>
);
export default ProblemResolverDescription;