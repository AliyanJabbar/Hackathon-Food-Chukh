"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Loading from "../loading";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import PageHeader from "@/components/page-header";
export default function ProfilePage() {
  const { user, isLoading, isAuthenticated } = useKindeAuth();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <section>
      <PageHeader heading="User Details" title="User details" />
      <main className="px-[14%] py-[100px] ">
        {isAuthenticated ? (
          <div className="bg-white overflow-hidden shadow-md rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Hello!{" "}
                <span className="text-orangeLike font-bold text-[18px]">
                  {user?.given_name
                    ?.split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-txtGray">
                See your information here
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                {/* first name  */}
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-txtGray">
                    First name
                  </dt>
                  <dd className="mt-1 text-sm text-txtBlack sm:mt-0 sm:col-span-2">
                    {user?.given_name}
                  </dd>
                </div>
                {/* last name */}
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-txtGray">
                    Last name
                  </dt>
                  <dd className="mt-1 text-sm text-txtBlack sm:mt-0 sm:col-span-2">
                    {user?.family_name}
                  </dd>
                </div>
                {/* email */}
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-txtGray">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-txtBlack break-words sm:mt-0 sm:col-span-2">
                    {user?.email}
                  </dd>
                </div>
                {/* id */}
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-txtGray">ID</dt>
                  <dd className="mt-1 text-sm text-txtBlack break-words sm:mt-0 sm:col-span-2">
                    {user?.id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ) : (
          <h1 className="text-[20px] font-bold w-fit text-txtBlack mx-auto mb-10">
            You are not Authenticated!{" "}
            <span className="text-[15px] text-txtGray font-normal">
              Please authenticate your self
            </span>
          </h1>
        )}
        {/* login, signup, logout */}
        <div
          className={`${
            !isAuthenticated && "flex w-full justify-center"
          } mt-8 flex flex-col sm:flex-row gap-6 sm:gap-4`}
        >
          <LoginLink
            postLoginRedirectURL="/"
            className={`${
              isAuthenticated ? "hidden" : "block"
            } px-4 py-2 bg-orangeLike text-white rounded hover:bg-orange-500 transition-colors text-center text-nowrap`}
          >
            Sign in
          </LoginLink>
          <RegisterLink
            postLoginRedirectURL="/"
            className={`${
              isAuthenticated ? "hidden" : "block"
            } px-4 py-2 bg-orangeLike text-white rounded hover:bg-orange-500 transition-colors text-center text-nowrap`}
          >
            Sign up
          </RegisterLink>
          <LogoutLink
            className={`${
              isAuthenticated ? "block" : "hidden"
            } px-4 py-2 bg-orangeLike text-white rounded hover:bg-orange-500 transition-colors text-center text-nowrap`}
          >
            Log out
          </LogoutLink>
        </div>
      </main>
    </section>
  );
}
