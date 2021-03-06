import { DatePicker } from '../';
import FormLabel from '../Forms/FormLabel';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const DatePickerComponent = () => {
    return (
        <ComponentPage
            description={`The **Date Picker** is an opinionated composition of the **Input Group**, **Popover**
                and **Calendar** components to accomplish the UI pattern for picking a date.`}
            sourceModulePath={path.join(__dirname, './DatePicker')}
            title='Date Picker'>

            <Example
                centered
                title='Simple Date Picker'>
                <DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends />
                <DatePicker
                    blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
                    compact
                    disableWeekday={['Monday', 'Tuesday']} />
            </Example>

            <Example
                centered
                title='Localized Date Picker'>
                <DatePicker locale='es' />
                <DatePicker locale='fr' />
            </Example>

            <Example
                centered
                title='Custom format Date Picker'>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField1'>
                    Custom Date Format 'YYYY/MM/DD'
                    </FormLabel>
                    <DatePicker
                        dateFormat='YYYY/MM/DD'
                        inputProps={{
                            id: 'customDateFormatField1'
                        }} />
                </div>
                <div>
                    <FormLabel
                        htmlFor='customDateFormatField2'>
                    Custom Date Format 'DD-MM-YYYY'
                    </FormLabel>
                    <DatePicker
                        dateFormat='DD-MM-YYYY'
                        inputProps={{
                            id: 'customDateFormatField2'
                        }} />
                </div>
            </Example>

            <Example
                centered
                title='Range Date Picker'>
                <DatePicker disableFutureDates enableRangeSelection />
                <DatePicker compact disablePastDates
                    enableRangeSelection />
            </Example>

            <Example
                centered
                title='Validation States'>
                <DatePicker
                    validationState={{ state: 'error', text: 'Test validation state' }} />
                <DatePicker
                    validationState={{ state: 'warning', text: 'Test validation state' }} />
                <DatePicker
                    validationState={{ state: 'success', text: 'Test validation state' }} />
                <DatePicker
                    validationState={{ state: 'information', text: 'Test validation state' }} />
            </Example>

            <Example
                centered
                title='Disabled and ReadOnly'>
                <DatePicker disabled />
                <DatePicker readOnly />
            </Example>


        </ComponentPage>
    );
};
