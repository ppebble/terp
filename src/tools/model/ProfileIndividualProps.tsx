export type ProfileSkillType = {
  userId: string;
  projectName: string;
  startDate: string;
  endDate: string;
  clientCompany: string;
  workingCompany: string;
  developmentField: string;
  role: string;
  model: string;
  os: string;
  language: string;
  dbms: string;
  tool: string;
  communication: string;
  etc: string;
};

export type ProfileAbilityType = {
  userId: string;
  skillName: string;
  skillGrade: string;
  classificationCriteria: string;
};
export type ProfileCareerType = {
  userId: string;
  companyName: string;
  careerStart: string;
  careerEnd: string;
  hireTerm: number;
  mainCareer: string;
  spot: string;
  task: string;
  jobClassification: string;
};
export type ProfileEduType = {
  userId: string;
  eduName: string;
  startDate: string;
  EndDate: string;
  organization: string;
};
export type ProfileIndividualProps = {
  abilityList: ProfileAbilityType[];
  careerList: ProfileCareerType[];
  eduList: ProfileEduType[];
  skillList: ProfileSkillType[];
};
