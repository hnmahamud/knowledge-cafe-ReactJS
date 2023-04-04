import React from 'react';

const PersonalBlog = () => {
  return (
    <div className="flex flex-col space-y-4 my-12">
      <h1 className="text-xl font-bold text-header1Color text-center my-4">PERSONAL BLOGS</h1>

      <div className="bg-primaryBgColor card card-side border-2 rounded-sm p-4">
        <div className="col-span-2 card-body">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Difference between Props and State</h2>

            <p><strong>Props:</strong> Props(properties) are used to pass data from one component to another(parent to child). It is Immutable that child component cannot be modify the data.</p>

            <p><strong>State:</strong> The state is a local data storage that is local to the component only and cannot be passed to other components. State is used to manage data that is internal to a component. State is mutable, that a component can modify its own state.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primaryBgColor card card-side border-2 rounded-sm p-4">
        <div className="col-span-2 card-body">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">How does useState work?
            </h2>
            <p><strong>useState</strong> hook is a very common hook in react which is used to store and update any variable value on a component level. The reason why we would store the variable value inside the state is so that we can access those values without any sort of DOM manipulation which are not available in React JS.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primaryBgColor card card-side border-2 rounded-sm p-4">
        <div className="col-span-2 card-body">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Purpose of useEffect other than fetching data.</h2>
            <p><strong>useEffect</strong> provides a flexible and powerful way to manage the side effects of your React components, whether they involve fetching data or performing other types of operations.
            </p>
            <p>1. Validating input field running on state change.</p>
            <p>2. Live filtering running on state change.</p>
            <p>3. Trigger animation on new array value running on state change.</p>
            <p>4. Update content running on props change.</p>
          </div>
        </div>
      </div>

      <div className="bg-primaryBgColor card card-side border-2 rounded-sm p-4">
        <div className="col-span-2 card-body">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">How Does React work?</h2>
            <p>React is a JavaScript library for building user interfaces. It works by breaking the UI down into reusable components and updating the actual DOM using a virtual DOM and a process called reconciliation. React follows a one-way data flow model and provides hooks for managing state. Overall, React is a powerful and flexible tool for building complex, interactive UIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBlog;
