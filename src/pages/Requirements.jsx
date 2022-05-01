import moment from "moment";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Requirements = ({ info }) => {
  return (
    <div className="grid grid-cols-12 w-full py-10 text-dark">
      <div className="col-span-0 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-6 space-y-3 px-3 lg:px-0">
        <Link to={"/"} className="flex items-center text-hpu">
          <IoMdArrowBack />
          {"back to the form"}
        </Link>
        <h1 className="font-semibold text-2xl text-hpu">
          ABSTRACT SUBMISSION GUIDELINES
        </h1>
        <p>Please read the following guidelines thoroughly.</p>
        <p>
          If you have any difficulties or queries about abstract submission,
          please contact the Conference Secretariat at{" "}
          <a href="conference2022@hpu.edu.sy" className="text-hpu">
            conference2022@hpu.edu.sy
          </a>
        </p>
        <table className="w-full border-2 border-lightGray table-auto border-collapse rounded-md">
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Deadline
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md">
              The deadline for abstract submission is{" "}
              {moment(info?.deadline).format("DD MMM YYYY")}. Authors can edit
              their abstracts until the submission deadline. No further changes
              will be accepted after that date.
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Submission
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md">
              All abstracts should be submitted electronically through the
              abstract submission platform.
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Language
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md">
              All abstracts must be submitted in English and, if accepted,
              presented in English.
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Type of presentation
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md">
              <p>Abstracts may be submitted for either: </p>
              <p className="pl-2">• Oral presentation</p>
              <p className="pl-2">• Poster presentation</p>{" "}
              <p>
                {" "}
                At the moment of submission, authors may indicate their
                preference for one or the other type of presentation.
              </p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Topics
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md">
              <p>
                We invite authors to submit abstracts within one of the
                conference topics:{" "}
              </p>
              <p className="mt-2">
                1) Internal Medicine: Innovations and New Practices in:
              </p>
              <p className="pl-3"> • Diabetes treatment and management</p>
              <p className="pl-3">
                • Management and treatment of pulmonary diseases in the time of
                the COVID-19 pandemic{" "}
              </p>
              <p className="pl-3"> • Cardiac catheterization</p>{" "}
              <p className="pl-3"> • Occupational therapy</p>{" "}
              <p className="mt-2">
                2) Surgery: Surgical Innovations, New Techniques and
                Technologies in:
              </p>
              <p className="pl-3"> • Pediatric and adult cardiac surgery</p>{" "}
              <p className="pl-3"> • Laparoscopic surgery</p>{" "}
              <p className="pl-3"> • Joint surgery</p>{" "}
              <p className="pl-3"> • Bariatric surgery</p>{" "}
              <p className="pl-3"> • Cancer surgery</p>{" "}
              <p className="pl-3"> • Plastic surgery </p>{" "}
              <p className="pl-3"> • Gynecologic surgery</p>{" "}
              <p className="mt-2">
                3) Diagnostic and Interventional Radiology: The role of PET
                imaging in the diagnosis and treatment of cancer
              </p>
              <p className="mt-2">
                4) Pediatrics: current practices and challenges
              </p>
              <p className="mt-2">
                5) Recent advances in ophthalmology practice and research
              </p>
              <p className="mt-2">6) ENT: innovations and emerging trends</p>
              <p className="mt-2">
                7) Immunotherapy and stem cell therapy in cancer treatment
              </p>
              <p className="mt-2">8) Acupuncture: uses, benefits and risks</p>
              <p className="mt-2">9) Covid-19 updates</p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Abstract specifics
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>
                Abstracts must be original and must not have been published or
                presented at any other meeting prior to this conference.
                Abstracts must include the complete first name, family name,
                title, affiliated institution, country, and email address of
                every author and must be structured as follows:{" "}
              </p>
              <p className="pl-2">• Background & Objectives </p>
              <p className="pl-2">• Methods</p>{" "}
              <p className="pl-2">• Results</p>{" "}
              <p className="pl-2">• Conclusions</p>{" "}
              <p>Word limit: 250-300 words.</p>
              <p>
                Abstract submissions must{" "}
                <span className="font-semibold">not</span> include tables or
                figures. Please only use standard abbreviations or define them
                in full. Accuracy is the responsibility of the author. Abstracts
                will be published as submitted.{" "}
              </p>
              <p>
                Please ensure that all abstracts are carefully proofread before
                upload. Abstracts must be written in Times New Roman font, 12Pt.
              </p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Authors
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>
                Only the main author or a co-author may present the abstract.
              </p>
              <p>
                The presenting author must be clearly marked on the submission
                form.
              </p>
              <p>
                Please do provide up-to-date contact details, as those will be
                used for any communications related to the Conference and your
                presentation.
              </p>
              <p>
                Any changes in the presenter or their contact details must be
                communicated as soon as possible to the Conference Secretariat
                at{" "}
                <a href="conference2022@hpu.edu.sy" className="text-hpu">
                  conference2022@hpu.edu.sy
                </a>
              </p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Grading
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>All abstracts will be graded following the criteria below:</p>
              <p className="pl-2">
                • Novelty: The abstract must show innovative information,
                cutting-edge results, or present a new topic or application in
                the field of interest; it should be attractive for a discussion
                with the audience.{" "}
              </p>
              <p className="pl-2">
                • Advancement of field: The abstract should present a
                significant contribution to the field, and the authors must
                specify how the paper will contribute to the development of
                global knowledge.
              </p>{" "}
              <p className="pl-2">
                • Quality: The quality of an abstract will be considered
                indicative of the quality of the final presentation by the
                reviewers. Authors should prepare their abstracts with care,
                assuring that the reader will understand the background of the
                issue(s) and the objectives of the presentation.
              </p>{" "}
              <p className="pl-2">
                • Relevance: Abstracts must be concise and coherent, and the
                focus of the abstract and its relevance to an international
                audience should be stated clearly.
              </p>{" "}
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Abstract review process
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>
                Abstracts will be reviewed by the Conference Scientific
                Committee.{" "}
              </p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Notification of results
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>
                All abstract submitters will be notified of the acceptance or
                rejection of the abstract via email by{" "}
                <span className="text-danger">15 June 2022</span>.
              </p>
              <p>
                For accepted oral presentations, the exact date and time of the
                assigned session will be communicated by
                <span className="text-danger"> 30 June 2022</span>.
              </p>
            </td>
          </tr>
          <tr className="w-full space-x-2">
            <th className="text-left p-2 border-2 border-lightGray rounded-l-md">
              Registration to the Conference
            </th>
            <td className="text-left py-2 px-3 md:px-10 border-2 border-lightGray rounded-r-md space-y-1">
              <p>
                Abstract and poster presenters must{" "}
                <Link to={"/"} className="text-hpu">
                  register to the First International Medical Conference
                </Link>{" "}
                by
                <span className="text-danger"> 30 May 2022</span>. The
                Conference Committee does not guarantee to presenters who
                register after the said date that their abstracts will be
                included in the conference publications, including the Abstract
                book and conference program.
              </p>

              <p>
                Abstract presenters are strongly encouraged to attend the First
                International Medical Conference in person to make the most of
                this vibrant gathering and networking opportunities.
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div className="col-span-0 lg:col-span-3"></div>
    </div>
  );
};

export default Requirements;
