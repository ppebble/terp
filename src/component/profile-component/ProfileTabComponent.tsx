import React from 'react';
import '../../tools/css/profileTab.css';

type ProfileTabType = {
  activeTab: string;
  tabChangeHandler: (value: string) => void;
};

function ProfileTabComponent({ activeTab, tabChangeHandler }: ProfileTabType) {
  return (
    <div
      className="nav flex-column nav-pills nav-secondary
       nav-pills-no-bd nav-pills-icons"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
      style={{ textAlign: 'center' }}
    >
      <button
        type="button"
        className="nav-link"
        id="v-pills-home-tab-icons"
        data-toggle="pill"
        role="tab"
        aria-controls="show_profile"
        aria-selected="true"
        onClick={() => {
          tabChangeHandler('basic');
        }}
      >
        <i className="far fa-user-circle" />
        <button
          className="tab-button"
          type="button"
          value="basic"
          //   onClick={e => {
          //     tabChangeHandler((e.target as HTMLButtonElement).value);
          //   }}
        >
          기본정보
        </button>
      </button>
      <button
        type="button"
        className="nav-link"
        id="v-pills-career-tab-icons"
        data-toggle="pill"
        role="tab"
        aria-controls="v-pills-career-icons"
        aria-selected="false"
        onClick={() => {
          tabChangeHandler('career');
        }}
      >
        <i className="far fa-address-card" />
        <button type="button" className="tab-button" value="career">
          경력사항
        </button>
      </button>
      <button
        className="nav-link"
        type="button"
        id="v-pills-license-tab-icons"
        data-toggle="pill"
        role="tab"
        aria-controls="v-pills-license-icons"
        aria-selected="true"
        onClick={() => {
          tabChangeHandler('license');
        }}
      >
        <i className="far fa-id-badge" />
        <button type="button" className="tab-button">
          자격증
        </button>
      </button>
      <button
        className="nav-link"
        id="v-pills-education-tab-icons"
        data-toggle="pill"
        type="button"
        role="tab"
        aria-controls="v-pills-education-icons"
        aria-selected="false"
        onClick={() => {
          tabChangeHandler('edu');
        }}
      >
        <i className="fa fa-laptop" />
        <button type="button" className="tab-button">
          교육
        </button>
      </button>
      <button
        className="nav-link"
        id="v-pills-skill-tab-icons"
        data-toggle="pill"
        type="button"
        role="tab"
        aria-controls="v-pills-skill-icons"
        aria-selected="false"
        onClick={() => {
          tabChangeHandler('lang');
        }}
      >
        <i className="fa fa-tasks" />
        <button type="button" className="tab-button">
          보유기술 및 외국어 능력
        </button>
      </button>
      <button
        className="nav-link"
        id="v-pills-project-tab-icons"
        data-toggle="pill"
        type="button"
        role="tab"
        aria-controls="v-pills-project-icons"
        aria-selected="false"
        onClick={() => {
          tabChangeHandler('skill');
        }}
      >
        <i className="fa fa-sitemap" />
        <button type="button" className="tab-button">
          Skill Inventory
        </button>
      </button>
      <button
        className="nav-link"
        id="v-pills-evidence-tab-icons"
        data-toggle="pill"
        type="button"
        role="tab"
        aria-controls="v-pills-evidence-icons"
        aria-selected="false"
        onClick={() => {
          tabChangeHandler('doc');
        }}
      >
        <i className="fas fa-file-alt" />
        <button type="button" className="tab-button">
          증빙 서류
        </button>
      </button>
    </div>
  );
}
export default ProfileTabComponent;
