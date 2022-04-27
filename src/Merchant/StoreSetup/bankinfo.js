import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CancelIcon from '@mui/icons-material/Cancel';
import ShopLogo from "../../assets/images/CDL MarketHub black.png";
import "../Registration/registration.css"
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Example() {
  
  return (
    <div>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-black">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <CancelIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuOutlinedIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={ShopLogo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={ShopLogo}
                      alt="Workflow"
                    />
                  </div>
                  <div class="flex justify-items-center">
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <a
                        href="#"
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-extrabold"
                      >
                        Store Information
                      </a>
                      <a
                        href="#"
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-extrabold"
                      >
                        Business Information
                      </a>
                      <a
                        href="#"
                        className="border-indigo-500 text-gray-900  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-extrabold"
                      >
                        Bank Details
                      </a>
                      <a
                        href="#"
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-extrabold"
                      >
                        Summary
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <NotificationsOutlinedIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden ">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Store Information
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                  Business Information
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Bank Details
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Summary
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div class="boss">
        <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-5  ">
            <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-16 w-auto ">
              <h2 className="mt-6 text-center text-xl font-extrabold text-black">
              Add Bank Details
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
              <h3 className="font-medium text-blue-900 italic ">
                {" "}
                This is where your money will be paid into, ensure you enter correct bank information.{" "}
              </h3>
            </p>                 
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-3">
                <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="Store Category"
                                className="block text-sm font-extrabold text-gray-700"
                            >
                                {" "}
                                Account Type{" "}
                            </label>

                            <div className="mt-1">
                            <select
                            id="BankType"
                            name="BankType"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue="--pick a type of account--"
                            required
                            placeholder="--pick a type of account--"
                            >
                            <option>Savings Account</option>
                            <option>Current Account</option>
                            <option>Domiciliary Account</option>
                            <option>Fixed Deposit Account</option>
                            <option>Non Resident Nigerian Account</option>
                            <option>Mobile Phones</option>
                            <option>Corporate Account</option>
                            <option>Joint Account</option>
                            </select>
                            </div>
                        </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-extrabold text-gray-700"
                    >
                      {" "}
                      Bank Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="BankName"
                        name="BankName"
                        type="text"
                        autoComplete="BankName"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                  <label
                  htmlFor="email"
                  className="block text-sm font-extrabold text-gray-700"
                  >
                  {" "}
                        Account Number{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="AcctNo"
                          name="AcctNo"
                          type="text"
                          autoComplete="AcctNo"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                          placeholder=""
                          />
                          </div>
                          </div>

                          
                    <div class="space-y-14">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-extrabold text-gray-700"
                      >
                        {" "}
                        Account Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="AcctName"
                          name="AcctName"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="flex justify-end">
                      <button
                        type="submit"
                        className="w-28 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
