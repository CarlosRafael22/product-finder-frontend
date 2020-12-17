import React from 'react';
import InputForm from './InputForm';
import { render, fireEvent, cleanup } from '@testing-library/react';


describe('Test InputForm rendering', () => {

    const props = {
        type: 'text',
        label: 'Name',
        placeholder: 'Enter your name',
        helpText: 'We need to know your name',
        value: '',
        onChangeCallback: jest.fn()
    };

    afterEach(() => cleanup())

    test('It should render with props passed', () => {
        const wrapper = render(<InputForm {...props} />);

        expect(wrapper.queryByPlaceholderText(props.placeholder)).not.toBeNull();
        expect(wrapper.queryByText(props.label)).not.toBeNull();
        expect(wrapper.queryByText(props.helpText)).not.toBeNull();
        expect(wrapper.queryByDisplayValue(props.value)).not.toBeNull();
    });

    test('It should not render helpText if not passed', () => {
        const newProps = {
            type: 'text',
            label: 'Name',
            placeholder: 'Enter your name',
            value: '',
            onChangeCallback: jest.fn()
        };

        const wrapper = render(<InputForm {...newProps} />);
        expect(wrapper.queryByTestId('helpText')).toBeNull();
    });

    test('It should call the onChangeCallback when typing', () => {
        // GIVEN
        const wrapper = render(<InputForm {...props} />);
        const input = wrapper.getByLabelText(props.label+'Input');

        // WHEN
        const text = 'Text';
        fireEvent.change(input, { target: { value: text}});

        // THEN
        expect(props.onChangeCallback).toHaveBeenCalledWith(text);
    });
});