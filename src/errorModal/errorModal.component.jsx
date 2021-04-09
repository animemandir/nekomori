import React from "react";

import { useDispatch } from "react-redux";

import { removeError, showModal, setShowModal } from "../actions";

export default function ErrorModal() {
  // const [showModal, setShowModal] = React.useState(true);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col mx-4 bg-gray-700 outline-none focus:outline-none">
                {/*header*/}
                <div className=" px-2 pt-3 pb-2 text-center border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-base text-gray-200 font-semibold">Error</h3>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Excceded the amount of requests in 1 minute. <br /> Wait for approx 1min &
                    Please try again.
                    <br />
                    This App is in development mode, so you can change the tabs approximately 4-5
                    times in 1 minute.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-2 pt-2 py-1 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-200 bg-gray-900 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      dispatch(removeError());
                      dispatch(setShowModal());
                    }}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}
