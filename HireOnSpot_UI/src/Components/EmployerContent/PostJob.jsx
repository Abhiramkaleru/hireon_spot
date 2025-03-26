import React from "react";
import { Form, Input, InputNumber, Select, Button, Alert, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postJob } from "../../Redux/JobSlice";

const { TextArea } = Input;

const PostJob = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.jobs);

  const onFinish = (values) => {
    dispatch(postJob(values));
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-4 md:p-6 rounded-xl shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: "#004aad" }}>
        Post a New Job
      </h2>

      {/* Error Message */}
      {error && <Alert message={error} type="error" showIcon className="mb-4" />}

      <Form
        name="jobPosting"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ mode: "walkin" }}
      >
        {/* Job Title */}
        <Form.Item
          label="Job Title"
          name="title"
          rules={[{ required: true, message: "Please enter the job title!" }]}
        >
          <Input placeholder="Job Title" className="w-full" />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Job Description"
          name="description"
          rules={[{ required: true, message: "Please enter a job description!" }]}
        >
          <TextArea rows={3} placeholder="Describe the job details..." className="w-full" />
        </Form.Item>

        {/* Salary */}
        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: "Please enter the salary!" }]}
        >
          <InputNumber
            placeholder="Salary"
            className="w-full"
            min={0}
            formatter={(value) => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        </Form.Item>

        {/* Location */}
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter the job location!" }]}
        >
          <Input placeholder="Location" className="w-full" />
        </Form.Item>

        {/* Requirements */}
        <Form.Item
          label="Requirements"
          name="requirements"
          rules={[{ required: true, message: "Please enter the job requirements!" }]}
        >
          <TextArea rows={3} placeholder="Specify required skills..." className="w-full" />
        </Form.Item>

        {/* Mode */}
        <Form.Item
          label="Job Mode"
          name="mode"
          rules={[{ required: true, message: "Please select a job mode!" }]}
        >
          <Select className="w-full">
            <Select.Option value="walkin">Walk-in</Select.Option>
            <Select.Option value="offline">Offline</Select.Option>
          </Select>
        </Form.Item>

        {/* HR Name */}
        <Form.Item
          label="HR Name"
          name="hr_name"
          rules={[{ required: true, message: "Please enter the HR name!" }]}
        >
          <Input placeholder="HR Name" className="w-full" />
        </Form.Item>

        {/* Company Name */}
        <Form.Item
          label="Company Name"
          name="company_name"
          rules={[{ required: true, message: "Please enter the company name!" }]}
        >
          <Input placeholder="Company Name" className="w-full" />
        </Form.Item>

        {/* HR LinkedIn */}
        <Form.Item
          label="HR LinkedIn"
          name="hr_linkedin"
          rules={[{ required: true, message: "Please enter HR's LinkedIn profile URL!" }]}
        >
          <Input placeholder="HR LinkedIn URL" className="w-full" />
        </Form.Item>

        {/* Company LinkedIn */}
        <Form.Item
          label="Company LinkedIn"
          name="company_linkedin"
          rules={[{ required: true, message: "Please enter the company LinkedIn profile URL!" }]}
        >
          <Input placeholder="Company LinkedIn URL" className="w-full" />
        </Form.Item>

        {/* Hiring Team LinkedIn */}
        <Form.Item
          label="Hiring Team LinkedIn"
          name="hiring_team_linkedin"
          rules={[{ required: true, message: "Please enter the hiring team's LinkedIn profile URL!" }]}
        >
          <Input placeholder="Hiring Team LinkedIn URL" className="w-full" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={loading}
            className="w-full py-2 text-lg"
            style={{
              background: "linear-gradient(90deg, #ff9900 0%, #004aad 100%)",
              border: "none",
              color: "white",
            }}
          >
            {loading ? <Spin /> : "Post Job"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostJob;
