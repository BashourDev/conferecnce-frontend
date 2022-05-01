import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const ConferenceInvitation = ({ info }) => {
  return (
    <div className="grid grid-cols-12 w-full py-10">
      <div className="col-span-1 lg:col-span-3"></div>
      <div className="col-span-10 lg:col-span-6 space-y-3 text-dark">
        <Link to={"/"} className="flex items-center text-hpu">
          <IoMdArrowBack />
          {"back to the form"}
        </Link>
        <h1 className="font-semibold text-2xl text-hpu">
          Invitation to the First International Medical Conference{" "}
        </h1>
        <p>Dear colleagues,</p>
        <p>
          Al-Hawash Private University (HPU) is pleased to invite you to attend,
          participate in and contribute to the First International Medical
          Conference entitled “Innovations, New Techniques and Technologies in
          Medical and Health Sciences”. The conference is to be held on August
          22-26, 2022 at Al-Hawash Private University and Dr. F. Ayoub
          University Hospital, Al Hawash, Homs, Syria. The aim of the conference
          is to bring together academicians, researchers and medical
          practitioners from around the world to present and discuss the most
          recent innovations and trends in various fields of medical and health
          sciences. The conference will also provide a great opportunity to
          network with scholars from different countries, develop research
          collaborations and start new projects.{" "}
        </p>
        <p>
          The Conference program will include educational and practical
          sections. In the educational part of the conference, participants will
          have the opportunity to present their research findings and
          educational practices with the local academic community in the form of
          oral and poster presentations. The practical part will include a
          variety of workshops on practical skill performance in the clinical
          setting, presentation and discussion of clinical cases as well as the
          performance of the unique, complex surgical operations in the hospital
          operating theaters, using the most advanced surgical techniques and
          technologies.
        </p>
        <p>
          The Conference will be held in a HYBRID format (physical and virtual
          attendance both accepted).
        </p>

        <p>
          To register and submit your abstracts,{" "}
          <Link to={"/"} className="text-hpu">
            click here.
          </Link>{" "}
        </p>
        <h3 className="font-semibold">
          The abstract submission deadline:{" "}
          {moment(info?.deadline).format("DD MMM YYYY")}.
        </h3>
        <div>
          <h3>The Conference participants will be provided with free:</h3>
          <p>
            accommodation, meals, transportation inside Syria and guided tours
            to the most famous attractions in Syria.
          </p>
        </div>
        <h3 className="font-semibold">
          Upon completion of the International Medical Conference, each
          participant will receive a Certificate of Attendance.
        </h3>
        <h3 className="font-semibold">
          P.S. The Conference detailed program will be shared with you soon.
        </h3>
        <p>
          Please do not hesitate to contact us if you need any further
          information.
        </p>
      </div>
      <div className="col-span-1 lg:col-span-3"></div>
    </div>
  );
};

export default ConferenceInvitation;
