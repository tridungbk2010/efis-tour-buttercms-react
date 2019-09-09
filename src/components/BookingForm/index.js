import React from 'react';
import { Form, DatePicker, Input, Select, Button, Icon } from 'antd';
import { COUNTRY_DATA, DATA_TOUR } from '../../const';
const { Option } = Select;
const { TextArea } = Input;
function getTime(value) {
  if (!value) {
    return [];
  }
  return DATA_TOUR.find(t => t.name === value).time;
}

function BookingForm({ form, tour }) {
  const [duration, setDuration] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        date: fieldsValue['date'].format('YYYY-MM-DD'),
      };
      console.log('Received values of form: ', values);
    });
  }

  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };

  React.useEffect(() => {
    setDuration(tour.time);
    // eslint-disable-next-line
  }, []);

  function handleTourChange(value) {
    setDuration(getTime(value));
  }

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your Email"
            size="large"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your name!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your name"
            size="large"
          />,
        )}
      </Form.Item>
      <Form.Item style={{ width: '50%' }}>
        {getFieldDecorator('no', {
          rules: [{ required: true, message: 'Please input number!' }],
        })(
          <Input
            prefix={
              <Icon type="usergroup-add" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            size="large"
            placeholder="How many of you guys"
            type="number"
          />,
        )}
      </Form.Item>
      <Form.Item>{getFieldDecorator('date', config)(<DatePicker />)}</Form.Item>
      <Form.Item>
        {getFieldDecorator('tour', {
          rules: [{ required: true, message: 'Please select a Tour!' }],
          initialValue: tour.name,
        })(
          <Select
            size="large"
            placeholder="Select a kind of Tour"
            showSearch
            onChange={handleTourChange}
          >
            {DATA_TOUR.map(tour => (
              <Option key={tour.id} value={tour.name}>
                {tour.name}
              </Option>
            ))}
          </Select>,
        )}
      </Form.Item>

      {duration ? (
        <Form.Item>
          {getFieldDecorator('time', {
            rules: [{ required: true, message: 'Please select a Time!' }],
          })(
            <Select placeholder="Select a time" showSearch size="large">
              {duration.map(time => (
                <Option key={time} value={time}>
                  {time}
                </Option>
              ))}
            </Select>,
          )}
        </Form.Item>
      ) : null}

      <Form.Item>
        {getFieldDecorator('country', {
          rules: [{ required: true, message: 'Please select your Country!' }],
        })(
          <Select placeholder="Country" showSearch size="large">
            {COUNTRY_DATA.map(country => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('address', {
          rules: [
            { required: true, message: 'Please input your hotel address!' },
          ],
        })(
          <Input
            prefix={
              <Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            size="large"
            placeholder="Hotel address"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('otherRequest')(
          <TextArea
            size="large"
            prefix={
              <Icon type="question" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Other request"
          />,
        )}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Form.create({ name: 'time_related_controls' })(BookingForm);
