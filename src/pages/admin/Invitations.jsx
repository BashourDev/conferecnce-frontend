import React, { useEffect, useState } from "react";
import AppInput from "../../components/AppInput";
import SearchInput from "../../components/SearchInput";
import AppButton from "../../components/AppButton";
import api from "../../api/api";
import { MdSearch } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ReactPaginate from "react-paginate";
import EditInfo from "../../components/modals/EditInfo";
import { toast } from "react-toastify";

const Invitations = ({ info }) => {
  const [invitations, setInvitations] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditConfigOpen, setIsEditConfigOpen] = useState(false);
  const navigate = useNavigate();

  const getInvitations = async (pageNum = 0) => {
    setIsLoading(true);
    try {
      const res = await api.get(
        `/invitations?search=${search}&page=${pageNum + 1}`
      );
      console.log(res);
      setInvitations(res.data.data);
      setPage(Math.ceil(res.data.total / res.data.per_page));
    } catch (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error("Unauthorized");
        navigate("/");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      getInvitations();
    }
  };

  const handlePageClick = (event) => {
    getInvitations(event.selected);
  };

  useEffect(() => {
    getInvitations();
  }, []);
  return (
    <div>
      <div className="space-y-2 lg:space-y-0 lg:space-x-3 w-full bg-white ring-1 ring-lightGray/30 h-24 lg:h-16 px-3 lg:px-36 py-2 lg:py-0 flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-64 md:w-[28rem]">
          <SearchInput
            onKeyPress={onKeyPress}
            onChange={setSearch}
            placeholder={"search products..."}
            Icon={MdSearch}
          />
          <AppButton className="rounded-l-none">search</AppButton>
        </div>
        <div>
          <button
            onClick={() => setIsEditConfigOpen(true)}
            className="text-hpu"
          >
            Conference Info
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-2 lg:mx-20 mt-6 ring-2 ring-[#ecebeb] rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-[#f9fafb]">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Degree
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Job
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Occupation
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Institution
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Category of Participation
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Type of Presentation
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Telephone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark px-6 py-4"
                    >
                      Attachment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invitations.map((invitation) => (
                    <tr
                      key={invitation.id}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.name}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.degree}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.job}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.occupation}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.institution}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.country}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.email}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.category}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.presentation}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {invitation?.telephone}
                      </td>
                      <td className="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <a href={invitation?.first_media_only?.original_url}>
                          <span className="bg-primary/10 text-primary px-3 py-3 rounded">
                            view
                          </span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isLoading && <Loading />}
              <ReactPaginate
                className={"flex self-center my-2 text-xs lg:text-sm"}
                pageClassName={"border-2 px-2 py-1 rounded-sm mx-1"}
                activeClassName="text-white border-primary bg-primary"
                previousClassName="border-2 px-2 py-1 rounded-sm mx-1"
                nextClassName="border-2 px-2 py-1 rounded-sm mx-1"
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={page}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
      <EditInfo
        isOpen={isEditConfigOpen}
        setIsOpen={setIsEditConfigOpen}
        info={info}
      />
    </div>
  );
};

export default Invitations;
