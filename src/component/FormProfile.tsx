/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import Mainlayout from '../tools/modules/MainLayout';

function FormProfile() {
  return (
    <Mainlayout>
      <div className="section__content section__content--p30">
        <div className="card">
          <div
            className="card-header"
            style={{ backgroundColor: 'transparent' }}
          >
            <span className="image">
              <img
                style={{ width: 70, height: 70 }}
                // src={`${profileInfo[0].shot_path}`}
                alt="img"
              />
              <img
                style={{ width: 70, height: 70 }}
                src="/resources/images/user-shape.png"
                alt="userIcon"
              />
            </span>
            <label
              className="profile-title"
              style={{ fontSize: 18, fontWeight: 400 }}
              htmlFor="profile"
            >
              님의 정보
            </label>
            <span>
              <button className="btn btn-success btn-sm">
                <img
                  alt="btn"
                  // src={`${pageContext.request.contextPath}/resources/
                  // images/icon/dexcel.gif`}
                />
              </button>
            </span>
            <span>
              <button className="btn btn-success btn-sm">
                {/* src=
                {`${pageContext.request.contextPath}/resources/
                    images/icon/dexcel.gif`} */}
              </button>
            </span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-3">
                <div
                  className="nav flex-column nav-pills nav-secondary nav-pills-no-bd nav-pills-icons"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                  style={{ textAlign: 'center' }}
                >
                  <a
                    className="nav-link active show"
                    id="v-pills-home-tab-icons"
                    data-toggle="pill"
                    href="#show_profile"
                    role="tab"
                    aria-controls="show_profile"
                    aria-selected="true"
                  >
                    <i className="far fa-user-circle" />
                    <p>기본정보</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-career-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-career-icons"
                    role="tab"
                    aria-controls="v-pills-career-icons"
                    aria-selected="false"
                  >
                    <i className="far fa-address-card" />
                    <p>경력사항</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-license-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-license-icons"
                    role="tab"
                    aria-controls="v-pills-license-icons"
                    aria-selected="false"
                  >
                    <i className="far fa-id-badge" />
                    <p>자격증</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-education-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-education-icons"
                    role="tab"
                    aria-controls="v-pills-education-icons"
                    aria-selected="false"
                  >
                    <i className="fa fa-laptop" />
                    <p>교육</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-skill-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-skill-icons"
                    role="tab"
                    aria-controls="v-pills-skill-icons"
                    aria-selected="false"
                  >
                    <i className="fa fa-tasks" />
                    <p>보유기술 및 외국어능력</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-project-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-project-icons"
                    role="tab"
                    aria-controls="v-pills-project-icons"
                    aria-selected="false"
                  >
                    <i className="fa fa-sitemap" />
                    <p>Skill Inventory</p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-evidence-tab-icons"
                    data-toggle="pill"
                    href="#v-pills-evidence-icons"
                    role="tab"
                    aria-controls="v-pills-evidence-icons"
                    aria-selected="false"
                  >
                    <i className="fas fa-file-alt" />
                    <p>증빙 서류</p>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="show_profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab-icons"
                  >
                    <div className="accordion accordion-secondary">
                      <h5 className="col-2  horizontal">아이디</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">이름</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal" id="resi_num">
                        주민등록번호
                      </h5>
                      &lt;%-- <h4 className=" horizontal" /> --%&gt;
                      <hr />
                      <h5 className="col-2  horizontal">실제생일</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">성별</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">영문이름</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">가족관계</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">
                        병역 입대일 ~ 제대일
                      </h5>
                      <h4 className=" horizontal" />
                      <h4 className=" horizontal" />
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">역종, 병과</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">전화번호</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">비상연락망</h5>
                      <h4 className="col-3 horizontal" />
                      <h5 className="col-3 horizontal">비상연락처 관계</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">Email</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">주소</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">사원번호</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">부서</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">직책</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">직급</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">근무형태</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">근무지</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2  horizontal">기술등급 </h5>
                      <h4 className=" horizontal" />
                      <h4 className=" horizontal">
                        (
                        <a href="/profile/skillChart" target="_blank">
                          엔지니어링산업 진흥법 시행령
                        </a>
                        )
                      </h4>
                      <hr />
                      <h5 className="col-2  horizontal">과학기술인등록번호</h5>
                      <h4 className=" horizontal" />
                      <hr />
                      <h5 className="col-2 horizontal">고등학교</h5>
                      <h4 className="horizontal" style={{ width: '30%' }} />
                      <h5 className="horizontal">졸업여부</h5>
                      <h4 className="horizontal" style={{ width: '20%' }} />
                      <h5 className="horizontal">졸업일</h5>
                      <h4 className="horizontal" style={{ width: '10%' }} />
                      <hr />
                      <h5 className="col-2 horizontal">대학교</h5>
                      <h4 className="horizontal" style={{ width: '25%' }} />
                      <h5 className="horizontal">전공</h5>
                      <h4 className="horizontal" style={{ width: '14%' }} />
                      <h5 className="horizontal">졸업여부</h5>
                      <h4 className="horizontal" style={{ width: '13%' }} />
                      <h5 className="horizontal">졸업일</h5>
                      <h4 className="horizontal" style={{ width: '10%' }} />
                      <hr />
                      <h5 className="col-2 horizontal">복수전공1</h5>
                      <h4 className="horizontal" style={{ width: '25%' }} />
                      <h4 className="horizontal" style={{ width: '25%' }} />
                      <h5 className="horizontal">복수전공2</h5>
                      <h4 className="horizontal" style={{ width: '14%' }} />
                      <hr />
                      <h5 className="col-2 horizontal">대학원</h5>
                      <h4 className="horizontal" style={{ width: '25%' }} />
                      <h5 className="horizontal">전공</h5>
                      <h4 className="horizontal" style={{ width: '14%' }} />
                      <h5 className="horizontal">졸업여부</h5>
                      <h4 className="horizontal" style={{ width: '13%' }} />
                      <h5 className="horizontal">졸업일</h5>
                      <h4 className="horizontal" style={{ width: '10%' }} />
                      <hr />
                      <h5 className="col-2 horizontal">입사일</h5>
                      <h4 className="horizontal" />
                      <hr />
                      <h5 className="col-2 horizontal">퇴사일</h5>
                      <h4 className="horizontal" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-career-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-career-tab-icons"
                  >
                    ※경력기간의 개월 수는 30일 단위로 나눈 값입니다.
                    <div
                      className="accordion accordion-secondary notFirstMargin"
                      style={{ border: '1px solid rgba(0,0,0,.125)' }}
                    >
                      <div
                        className="card-header sort"
                        // id="headingFour${i.count}"
                        // onClick="active(this)"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        // aria-controls="collapse${i.count}"
                      >
                        <div className="span-title">
                          <i className="far fa-building" />
                          &lt;%-- (${'{'}career.hire_term{'}'}개월) --%&gt;
                          <i
                            className="fas fa-plus m-t-5"
                            style={{ float: 'right' }}
                          />
                          <p>
                            경력기간 : ${'{'}career.careerterm{'}'}
                          </p>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                      >
                        <div
                          className="card-body"
                          style={{ backgroundColor: 'white' }}
                        >
                          <h5 className="horizontal" style={{ width: '13%' }}>
                            입사일
                          </h5>
                          <h5 className="horizontal" style={{ width: '13%' }}>
                            퇴사일
                          </h5>
                          <h5 className="horizontal" style={{ width: '13%' }}>
                            직위
                          </h5>
                          <h5 className="horizontal" style={{ width: '17%' }}>
                            직무분류
                          </h5>
                          <h5 className="horizontal" style={{ width: '16%' }}>
                            담당업무
                          </h5>
                          <h5 className="horizontal" style={{ width: '20%' }}>
                            주프로젝트명
                          </h5>
                          <h5 className="horizontal" style={{ width: '13%' }} />
                          <h5 className="horizontal" style={{ width: '13%' }} />
                          <h5 className="horizontal" style={{ width: '13%' }} />
                          <h5 className="horizontal" style={{ width: '17%' }} />
                          <h5 className="horizontal" style={{ width: '16%' }} />
                          <h5 className="horizontal" style={{ width: '20%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-license-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-license-tab-icons"
                  >
                    <table
                      className="table table-striped"
                      style={{ width: '70%' }}
                    >
                      <thead
                        className="thead-dark"
                        style={{ border: '1px solid #000000' }}
                      >
                        <tr>
                          <th scope="col" style={{ paddingLeft: 20 }}>
                            자격증
                          </th>
                          <th scope="col">취득일</th>
                        </tr>
                      </thead>
                      <tbody style={{ border: '1px solid #dee2e6' }}>
                        <tr>
                          <td style={{ paddingLeft: 20 }} />
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-education-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-education-tab-icons"
                  >
                    <div
                      className="accordion accordion-secondary notFirstMargin"
                      style={{ border: '1px solid rgba(0,0,0,.125)' }}
                    >
                      <div
                        className="card-header sort"
                        // onClick="active(this)"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        // aria-controls="collapse${i.count}"
                      >
                        <div className="span-title">
                          <i className="fa fa-laptop" />
                          <i
                            className="fas fa-plus m-t-5"
                            style={{ float: 'right' }}
                          />
                        </div>
                      </div>
                      <div
                        // id="collapse${i.count}"
                        className="collapse"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                      >
                        <div
                          className="card-body"
                          style={{ backgroundColor: 'white' }}
                        >
                          <h5 className="horizontal" style={{ width: '30%' }}>
                            시작일
                          </h5>
                          <h5 className="horizontal" style={{ width: '30%' }}>
                            종료일
                          </h5>
                          <h5 className="horizontal" style={{ width: '30%' }}>
                            기관
                          </h5>
                          <h5 className="horizontal" style={{ width: '30%' }} />
                          <h5 className="horizontal" style={{ width: '30%' }} />
                          <h5 className="horizontal" style={{ width: '30%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-evidence-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-evidence-tab-icons"
                  >
                    <table
                      className="table table-striped"
                      style={{ width: '100%' }}
                    >
                      <thead
                        className="thead-dark"
                        style={{ border: '1px solid #000000' }}
                      >
                        <tr>
                          <th scope="col">증빙서류 첨부파일</th>
                        </tr>
                      </thead>
                      <tbody style={{ border: '1px solid #dee2e6' }}>
                        <tr>
                          <td>
                            <h4
                              className="horizontal"
                              style={{ marginRight: '3%' }}
                              //   id="fileDown${i.index }"
                              // onClick="fileDown('${profileInfo[0].emp_no}','${item}')"
                            >
                              ${'{'}item{'}'}
                            </h4>
                            <i
                              className="fas fa-download proNinfoArrow"
                              //   id="down${i.index }"
                              // onClick="fileDown('${profileInfo[0].emp_no}','${item}')"
                            />
                            <i
                              className="fas fa-trash-alt proNinfoArrow m-l-5"
                              //   id="delete${i.index }"
                              // onClick="fileDelete('${profileInfo[0].emp_no}','${item}','${i.index }')"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-skill-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-skill-tab-icons"
                  >
                    <table
                      className="table table-striped"
                      style={{ width: '70%' }}
                    >
                      <thead
                        className="thead-dark"
                        style={{ border: '1px solid #000000' }}
                      >
                        <tr>
                          <th scope="col">보유기술 및 외국어</th>
                          <th scope="col">숙련도(A,B,C)</th>
                          <th scope="col">분류기준</th>
                        </tr>
                      </thead>
                      <tbody style={{ border: '1px solid #dee2e6' }}>
                        <tr>
                          <td />
                          <td>
                            <span className="horizontal license_horizontal" />
                            <span
                              className="star"
                              style={{ marginLeft: '-37%' }}
                            >
                              {' '}
                              ★★★
                            </span>

                            <span className="horizontal license_horizontal" />
                            <span
                              className="star"
                              style={{ marginLeft: '-37%' }}
                            >
                              {' '}
                              ★★
                            </span>
                            <span style={{ color: '#a7a6a6' }}>★</span>
                            <span className="horizontal license_horizontal" />
                            <span
                              className="star"
                              style={{ marginLeft: '-37%' }}
                            >
                              {' '}
                              ★
                            </span>
                            <span style={{ color: '#a7a6a6' }}>★★</span>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-project-icons"
                    role="tabpanel"
                    aria-labelledby="v-pills-project-tab-icons"
                  >
                    <div
                      className="accordion accordion-secondary notFirstMargin"
                      style={{ border: '1px solid rgba(0,0,0,.125)' }}
                    >
                      <div
                        className="card-header sort"
                        // onClick="active(this)"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        // aria-controls="collapse${i.count}"
                      >
                        <div className="span-title">
                          <i className="fa fa-sitemap" />

                          <i
                            className="fas fa-plus m-t-5"
                            style={{ float: 'right' }}
                          />
                        </div>
                      </div>
                      <div
                        // id="collapse${i.count}"
                        className="collapse"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                      >
                        <div
                          className="card-body profileWidth15p"
                          style={{ backgroundColor: 'white' }}
                        >
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">시작일</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">종료일</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">고객사</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">근무회사</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">개발분야</h5>

                            <h4 className="horizontal p-r-5" />

                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">역할</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">기종</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">OS</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">언어</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">DBMS</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">TOOL</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="line-bottom padding10">
                            <h5 className="horizontal p-r-5">통신</h5>
                            <h4 className="horizontal p-r-5" />
                          </div>
                          <div className="padding10">
                            <h5
                              className="horizontal"
                              style={{ color: 'rgb(150, 150, 150)' }}
                            >
                              기타
                            </h5>
                            <h4 className="horizontal">
                              ${'{'}skill.etc{'}'}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success btn-sm"
              type="submit"
              style={{ float: 'right' }}
              // onClick="modify('${profileInfo[0].number}')"
            >
              수정
            </button>
            <div className="fr">
              <button
                className="btn btn-info btn-sm"
                // onClick="backLeaveList()"
              >
                목록으로
              </button>
            </div>
            <div className="fr">
              <button className="btn btn-info btn-sm">목록으로</button>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
export default FormProfile;
