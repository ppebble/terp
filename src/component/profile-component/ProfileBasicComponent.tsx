/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';

function ProfileBasicComponent({ param }: ParamType) {
  const basicDiv = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={basicDiv}
      className={classNames('tab-pane fade', {
        'active show': param.activeTab === 'basic',
      })}
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
        <h5 className="col-2  horizontal">병역 입대일 ~ 제대일</h5>
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
  );
}
export default ProfileBasicComponent;
