import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit } from "@fortawesome/free-solid-svg-icons"
import TermsText from "./TermsText"

export default function Terms() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        data-modal-target="partnerModal"
        data-modal-toggle="partnerModal"
        className="text-xs text-sky-900 hover:text-sky-700 hover:underline"
        type="button"
        onClick={setShowModal}>
        Terms
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center gap-x-2 p-4 border-b border-solid border-slate-400 bg-slate-300 rounded-t">
                  <FontAwesomeIcon className="text-sky-900" size="2x" icon={faUserEdit} />
                  <h3 className="text-3xl font-semibold text-sky-900">Terms</h3>
                  <button
                    className="text-slate-400 hover:bg-slate-200 hover:text-sky-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={() => setShowModal(false)}>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto max-h-[75vh] overflow-y-scroll">
                  <div className="container mx-auto text-sm text-left">
                    <TermsText />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-col p-3 border-t border-solid border-slate-400 rounded-b">
                  <button
                    className="text-sky-900 flex justify-end font-bold uppercase px-6 py-2 text-sm outline-none hover:text-sky-700 hover:underline"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
