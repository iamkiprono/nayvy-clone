import React from "react";

const ListProject = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center max-w-7xl m-auto p-6">
        <div className="md:w-[50%] p-4 text-[#4b5563]">
          <p className="text-5xl font-bold text-[#111827] my-4">
            Want to list your project as well?
          </p>
          <p className="mb-4 text-lg">
            You can do that by sending an email to kaka@nayvy.com with the
            following
          </p>
          <ul className="list-disc">
            <li>A good name for your project</li>
            <li>
              A good description for your project. A couple of
              sentences/paragraphs will do - one that will allow your potential
              customers to understand what the project is all about
            </li>
            <li>
              Features of your project. This can be in list format - features
              that your project comes packaged with
            </li>
            <li>Price and currency</li>
            <li>
              Sign up to Nayvy using the same email address you will email me
              with
            </li>
          </ul>
          <p className="my-4 text-lg">What will I do?</p>
          <ul className="list-disc">
            <li>Help with any editing you need</li>
            <li>Create a payment link for your project</li>
            <li>List your project on Nayvy</li>
            <li>
              Market your project on Twitter and many other places with
              potential buyers
            </li>
            <li>
              Receive payments on your behalf, will take 10% and send you 90%
              within 24 hours of sales
            </li>
            <li>
              I promise to be 100% honest and transparent as I work on
              automating this process
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:w-[50%] h-[600px] p-6">
          <div className="flex  justify-center items-center">
            <img
              className="shadow-2xl rounded-xl h-[264px] w-[176px] object-cover"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt=""
            />
          </div>
          <div className="flex md:flex-col gap-6 justify-around">
            <img
              className="shadow-2xl rounded-xl h-[264px] w-[176px] object-cover"
              src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt=""
            />
            <img
              className="shadow-2xl rounded-xl h-[264px] w-[176px] object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
              alt=""
            />
          </div>
          <div className="flex  md:flex-col gap-6 md:justify-between justify-around">
            <img
              className="shadow-2xl rounded-xl h-[264px] w-[176px] object-cover"
              src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
              alt=""
            />
            <img
              className="shadow-2xl rounded-xl h-[264px] w-[176px] object-cover"
              src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProject;
