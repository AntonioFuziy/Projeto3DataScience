//Example using json in JS

let dataAccuracy = '{"Accuracy": [{"0x0": "0.930952381","0x1": "0.55"},{"1x0": "0.069047619","1x1": "0.45"}]}';

let jsonAccuracy = JSON.parse(dataAccuracy);

let Correspondente_0x0 =  jsonAccuracy["Accuracy"][0]["0x0"];

let Correspondente_1x1 = jsonAccuracy["Accuracy"][1]["1x1"];

let Incorrespondente_0x1 = jsonAccuracy["Accuracy"][0]["0x1"]; 

let Incorrespondente_1x0 = jsonAccuracy["Accuracy"][1]["1x0"];

// Parameters for the code

let dataParameters = '{"Parameters": [{"OverTime_No": 8.04813549222222,"OverTime_Yes": 1.57395, "MonthlyIncome": 8.728583, "JobRole_Research Scientist": 4.035905638333333,"MaritalStatus_Single": 6.589017867999999, "TotalWorkingYears": 5.0010261175, "HourlyRate": 3.1621396371428565,"WorkLifeBalance": 4.107986085625, "YearsAtCompany": 3.136542966666666, "JobInvolvement": 3.451937500421052,"StockOptionLevel": 6.280462625499999, "DistanceFromHome": 3.6126385329999997, "YearsWithCurrManager": 6.096704504642859,"EnvironmentSatisfaction": 3.842873687407407, "Age": 5.191997277475925, "BusinessTravel_Travel_Frequently": 4.926074028461539,"JobLevel": 8.273410414999999, "YearsInCurrentRole": 2.9172763424999997,"EducationField_Other":0.19122, "JobSatisfaction": 3.2480153457599994,"NumCompaniesWorked": 4.293732775625, "JobRole_Sales Executive": 6.709451544285715, "RelationshipSatisfaction": 3.5085460122800005,"EmployeeNumber": 3.062351009761905, "BusinessTravel_Non-Travel": 2.532826527142857, "PercentSalaryHike": 3.1428592046666664,"MonthlyRate": 2.7805755996388886, "YearsSinceLastPromotion": 3.366501533588235, "JobRole_Sales Representative": 3.6823115820000005,"EducationField_Technical Degree": 3.762796798333333, "JobRole_Laboratory Technician": 2.938800533333333,"JobRole_Manufacturing Director": 3.031598726666667, "Department_Research & Development": 4.023900127999999,"Education": 1.6746608, "EducationField_Marketing": 3.4663617650000003, "TrainingTimesLastYear": 2.354264775555555,"EducationField_Life Sciences": 1.5081555433333331, "Gender_Female": 2.52437536,"Gender_Male":0.6256787, "EducationField_Medical": 2.04899359,"Department_Sales": 1.86172229, "MaritalStatus_Married": 3.12836838, "EducationField_Human Resources": 1.46847081}]}';

let jsonParameters = JSON.parse(dataParameters);

let GenderFemale = jsonParameters["Parameters"][0]["Gender_Female"];

let GenderMale = jsonParameters["Parameters"][0]["Gender_Male"];

let OvertimeYes = jsonParameters["Parameters"][0]["OverTime_Yes"];

let OvertimeNo = jsonParameters["Parameters"][0]["OverTime_No"];

let MaritalStatus_Married = jsonParameters["Parameters"][0]["MaritalStatus_Married"];

let MaritalStatus_Single = jsonParameters["Parameters"][0]["MaritalStatus_Single"];

let MonthlyIncome = jsonParameters["Parameters"][0]["MonthlyIncome"];

let Age = jsonParameters["Parameters"][0]["Age"];

let finalData = 0;

let index = 2;

let indexDemicao = 2;

function overtimeYes(){
    index = 1
};

function overtimeNo(){
    index = 0
};

if (index == 0){
    finalData = OvertimeNo
    console.log(finalData)
};

if (index == 1){
    finalData = OvertimeYes
    console.log(finalData)
};

let inputIdade = document.getElementById('input-idade');
let inputSalario = document.getElementById('input-salario');
let inputEstadoCivil = document.getElementById('input-estado-civil');
let inputGender = document.getElementById('input-gender');

let containerResult = document.getElementById('container-result');

let resultado = document.getElementById('resultado');

function confirm(){
    if (inputGender.value == 'Male' || inputGender.value == 'male' || inputGender.value == 'Masculino' || inputGender.value == 'masculino'){
        finalData += GenderMale
        console.log(finalData)
    }
    
    if (inputGender.value == 'Female' || inputGender.value == 'female' || inputGender.value =='feminino' || inputGender.value == 'Feminino'){
        finalData += GenderFemale
        console.log(finalData)
    }
    
    if (inputEstadoCivil.value == 'Solteiro' || inputEstadoCivil.value == 'solteiro'){
        finalData += MaritalStatus_Single
        console.log(finalData)
    }
    
    if (inputEstadoCivil.value == 'Casado' || inputEstadoCivil.value == 'casado'){
        finalData += MaritalStatus_Married
        console.log(finalData)
    }
    
    if (inputSalario.value >= 8000){
        finalData += 2.5
        console.log(finalData)
    }
    
    if (inputSalario.value < 8000){
        finalData += MonthlyIncome
        console.log(finalData)
    }
    
    if (inputIdade.value < 30 || inputIdade.value > 40){
        finalData += Age
        console.log(finalData)
    }
    
    if (inputIdade.value >= 30 || inputIdade.value <= 40){
        finalData += 1
        console.log(finalData)
    }
    console.log(finalData)
    
    if (finalData <= 15.541054498849073){
        containerResult.style.display = 'block'
        indexDemicao = 0
        setTimeout('result()',3000)
    }
    
    if (finalData > 15.541054498849073){
        containerResult.style.display = 'block'
        indexDemicao = 1
        setTimeout('result()',3000)
    }

};

function result(){
    if (indexDemicao == 1){
        resultado.innerHTML = 'Você foi demitido!'
    }

    if (indexDemicao == 0){
        resultado.innerHTML = 'Você permaneceu na empresa!'
    }
};

let soma = OvertimeNo + GenderFemale + MaritalStatus_Single + Age + MonthlyIncome;
console.log(soma/2);