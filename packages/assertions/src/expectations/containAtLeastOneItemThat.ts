import { AnswersQuestions } from '@serenity-js/core';
import { formatted } from '@serenity-js/core/lib/io';
import { Expectation } from '../Expectation';
import { ExpectationMet, ExpectationNotMet, Outcome } from '../outcomes';

export function containAtLeastOneItemThat<Actual>(expectation: Expectation<any, Actual>): Expectation<any, Actual[]> {
    return new ContainAtLeastOneItemThatMeetsExpectation(expectation);
}

/**
 * @package
 */
class ContainAtLeastOneItemThatMeetsExpectation<Expected, Actual> extends Expectation<Expected, Actual[]> {
    constructor(private readonly expectation: Expectation<Expected, Actual>) {
        super();
    }

    answeredBy(actor: AnswersQuestions): (actual: Actual[]) => Promise<Outcome<Expected, Actual[]>> {
        return (actual: Actual[]) =>
            actual.length === 0
                ? Promise.resolve(new ExpectationNotMet(this.toString(), null, actual))
                : Promise.all(actual.map(item => this.expectation.answeredBy(actor)(item)))
                    .then(results => results.some(result => result instanceof ExpectationMet)
                        ? new ExpectationMet(this.toString(), results[0].expected, actual)
                        : new ExpectationNotMet(this.toString(), results[0].expected, actual),
                    );
    }

    toString(): string {
        return formatted `contain at least one item that does ${ this.expectation }`;
    }
}
