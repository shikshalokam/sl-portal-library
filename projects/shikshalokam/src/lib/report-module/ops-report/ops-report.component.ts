import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OperationsService } from '../operations-service/operations.service';
import { MatAccordion, MatSnackBar } from '@angular/material';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';
import { OperationsService } from '../operations-service/operations.service';
import { CamelCasePipe } from '../../core-module/pipes/camelcase-pipe/camelcase.pipe';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
// import { this.globalConfig } from 'src/app/modules/global-config';

@Component({
  selector: 'app-ops-report',
  templateUrl: './ops-report.component.html',
  styleUrls: ['./ops-report.component.scss']
})
export class OpsReportComponent implements OnInit {
  reportGenerate = false;
  schoolPageIndex = 0;
  assessorPageIndex = 0;
  schoolGraph;
  assessorGraph;

  headings = 'headings.opsReport'
  currentUser;
  dynamicResize;
  columnNames;
  searchSchoolId;
  filterData;
  maxDate = new Date();
  filterForm: FormGroup;
  queryParamsUrl = '';
  searchSchoolValue: string = '';
  searchAssessorName: string = '';
  filterObject: any;
  filterArray;
  schoolReport: Object;
  itemsPerPage = [10, 15, 20];
  searchParam: string = '';
  assessorReport: any;
  summaryData: any;
  pageParam: any;
  pageReload = true;
  summaryGraph: object = {};
  schoolPageLimit: any = 10;
  assessorPageLimit: any = 10;
  expandedFilters: boolean = true;
  schoolLoading: boolean;
  assessorLoading: boolean;
  @Input() hostUrl;
  @Input() globalConfig;
  @ViewChild('myaccordion') filterPanel: MatAccordion;
  summaryProfileData: any;
  currentRouterUrl: string = '';
  queryParamsRouterUrl: string = '';
  apiBaseUrl: any;
  reportConfig: any;
  linkId;
  share: any;
  publicSharedBaseUrl: any;
  shareLinkApi: any;
  noAssess: any;
  componentId: any;
  baseUrl: any;
  portalName: any;
  urlQueryParams: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private operationService: OperationsService,
    private utility: UtilityService,
    private snackBar: MatSnackBar
  ) {
    this.route.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig
      this.shareLinkApi = data.shareLinkApi;
      this.publicSharedBaseUrl = data.publicSharedBaseUrl;
      this.globalConfig = data.globalConfig;
      this.noAssess = data.noAssess;
      this.componentId = data.componentId;
      this.hostUrl = data.apibaseUrl;
      this.baseUrl = data.baseUrl;
      this.portalName = data.portalName;
    })
    this.filterForm = this._fb.group({
      formDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  pdf(id) {
    var data = document.getElementById(id);
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save(id + '.pdf');
    });
  }

  ngOnInit() {
    this.currentRouterUrl = window.location.href;
    this.route.queryParams.subscribe(params => {
      let param = Object.assign({}, params);
      this.pageParam = params;
      this.utility.loaderShow();
      this.linkId = params['linkId'];
      this.getUserProfile(params['ProgramId']);
      this.filters(params['ProgramId']);
      this.applyFilter(this.pageParam);
      this.urlQueryParams = Object.assign({}, params);
      delete param.ProgramId;
      if (Object.keys(param).length) {
        this.generateReport(param);
        this.expandedFilters = false;
      } else {
        console.log("Inside ")
        console.log(param)
        this.filterForm.reset();
        this.expandedFilters = true;
        this.reportGenerate = false;
        this.assessorReport = [];
        this.schoolReport = [];
        this.summaryData = {};
      }
    });


    // this.route.queryParams.subscribe(params => {
    //   this.pageParam = params;
    //   this.utility.loaderShow();
    //   this.linkId = params['linkId'];
    //   this.getUserProfile(params['ProgramId']);
    //   this.filters(params['ProgramId']);
    //   this.applyFilter(this.pageParam);

    //   // if (this.pageReload) {
    //     if (Object.keys(params).length > 1) {
    //       // let param = Object.assign({}, params);
    //       // delete param['ProgramId'];
    //       // delete param['componentName'];
    //       // this.applyFilter(param);
    //       // this.expandedFilters = false;
    //       this.reportGenerate = true;
    //     }
    //     // this.pageReload = false;
    //   // }
    // })
  }

  filterApply(condition) {
    //console.logcondition)
    if (condition === 'reset') {
      this.filterForm.reset();
      // this.router.navigate(['/operations/reports'], { queryParams: { ProgramId: this.pageParam['ProgramId'] } });
      this.reportGenerate = false;
      this.filterArray = [];
      const keys = Object.keys(this.urlQueryParams);
      const obj = {}
      for (const key of keys) {
        obj[key] = null
      }
      obj['ProgramId'] = this.pageParam.ProgramId;
      this.applyFilter(obj);
      // this.route.queryParams.subscribe(params => {
      //   if(this.noAssess){
      //     let resetUrl = '/programs/public/ops-reports?ProgramId=' + params['ProgramId']
      //     window.history.pushState({ path: resetUrl }, '', resetUrl);
      //   }
      //   else{
      //   let resetUrl = '/programs/operations/ops-reports?ProgramId=' + params['ProgramId']
      //   window.history.pushState({ path: resetUrl }, '', resetUrl);
      //   }
      // })
    }
    else {
      // this.filterPanel.closeAll();
      this.pageReload = false;
      this.expandedFilters = !this.expandedFilters;
      this.filterObject = this.filterForm.getRawValue();
      for (let filter in this.filterObject) {
        if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
          delete this.filterObject[filter];
        }
      }
      if (this.filterObject.toDate) {
        // this.filterObject['fromDate']= this.applyDate(this.filterObject.fromDate)
        this.filterObject['toDate'] = this.applyDate(this.filterObject.toDate);

      }
      if (this.filterObject.fromDate) {
        this.filterObject['fromDate'] = this.applyDate(this.filterObject.fromDate);
        // this.filterObject['toDate']= this.applyDate(this.filterObject.toDate);

      }
      this.applyFilter(this.filterObject)
      this.filterArray = Object.entries(this.filterObject)
      // this.filterArray = Object.keys(this.filterObject).map(i => this.filterObject[i])
      // this.buildqueryParams();
      // this.reportsDataFetch();

    }
  }


  // remove(filter): void {
  //   let param;
  //   const index = this.filterArray.indexOf(filter);
  //   this.route.queryParams.subscribe(params => {
  //     param = params;
  //     // delete param['ProgramId'];
  //     // this.generateReport(param);
  //   })
  //   if (index >= 0) {
  //     this.filterArray.splice(index, 1);
  //   }


  // }
  mapGraphObject(data, type = 'call') {

    if (type === 'call') {

      data.forEach((object, ind) => {
        console.log(object)
        for (let i = 0; i < object.graphData.length; i++) {

          const dataArray = this.getData(object, i)
          Object.assign(data[ind].graphData[i], {
            data: dataArray
          })
          Object.assign(data[ind].graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } })

        }
        object.graphData.forEach((item, index) => {

          if (object.graphData[index].data.length > 2 && object.graphData[index].chartType === 'ColumnChart') {
            Object.assign(data[ind].graphData[index].chartOptions, {
              isStack: true,
            })
          }

          if (data[ind].graphData[index].data.length > 10) {
            Object.assign(data[ind].graphData[index].chartOptions.hAxis, { textPosition: 'none' });
          }
          let colNameArray = []
          data[ind].graphData[index].columnNames.forEach(column => {
            colNameArray.push(new CamelCasePipe().transform(column));
          });
          Object.assign(data[ind].graphData[index], { columnNames: colNameArray });


        });

        new CamelCasePipe().transform('schoolList')
        const headers = this.getTableHeader(object);
        Object.assign(data[ind], { tableHeader: headers })
      });
      ////console.logdata)
      return data;
    }
    else {
      for (let i = 0; i < data.graphData.length; i++) {

        const dataArray = this.getData(data, i);
        Object.assign(data.graphData[i], {
          data: dataArray
        })
        Object.assign(data.graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } })

      }
      data.graphData.forEach((item, index) => {

        if (data.graphData[index].data.length > 2 && data.graphData[index].chartType === 'ColumnChart') {
          Object.assign(data.graphData[index].chartOptions, {
            isStack: true,
          })
        }

        if (data.graphData[index].data.length > 10) {
          Object.assign(data.graphData[index].chartOptions.hAxis, { textPosition: 'none' });
        }
        let colNameArray = []
        data.graphData[index].columnNames.forEach(column => {
          colNameArray.push(new CamelCasePipe().transform(column));
        });
        Object.assign(data.graphData[index], { columnNames: colNameArray });


      });

      new CamelCasePipe().transform('schoolList')
      const headers = this.getTableHeader(data);
      Object.assign(data, { tableHeader: headers })

      ////console.logdata)
      return data.graphData;
    }
  }

  getTableHeader(object) {
    let headingArray = []
    object.tabularData.headers.forEach(header => {
      headingArray.push(header.name);
    })
    return headingArray;
  }

  getData(object, i) {
    let dataArray = [];
    for (let j = 0; j < object.data.length; j++) {
      let columnArray = this.getColumn(object, i, j);
      dataArray.push(columnArray);
    }
    return dataArray;
  }

  getUserProfile(ProgramId) {
    this.operationService.getUserProfileSummary(this.apiBaseUrl + this.reportConfig.profileSummary + ProgramId).subscribe(data => {
      ////console.logdata);
      this.summaryProfileData = data['result'];
      const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
          obj[item[keyField]] = item
          return obj
        }, {})
      this.summaryProfileData = arrayToObject(this.summaryProfileData, "label")
      if (this.noAssess) {
        this.utility.loaderHide();

      }
    },
      error => {

        this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        this.utility.loaderHide();

      });
  }
  getColumn(object, i, j) {
    let colArray = [];
    object.graphData[i].columnNames.forEach((column, index) => {
      column = column.trim();
      if (index > 0) {
        if (object.data[j][column] === "") {

          colArray.push(0);
        }
        else {
          colArray.push(object.data[j][column]);
        }
      }
      else {
        colArray.push(object.data[j][column]);
      }

    }
    );
    return colArray;
  }
  applyDate(value) {
    var date = new Date(value),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    const val = [day, mnth, date.getFullYear()].join("-");
    return val;
  }

  applyFilter(obj) {
    let navigationExtras: NavigationExtras = {
      queryParams: obj,
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    };
    this.router.navigate([], navigationExtras);

    // console.log("applyfilter");
    // let paramKey = Object.keys(obj);
    // let queryParamKey = Object.keys(this.pageParam);
    // let ifIndex = 0;
    // let elseIndex = 0;

    // this.queryParamsRouterUrl = '';
    // paramKey.forEach(element => {
    //   if (!this.pageReload) {
    //     if (element !== 'ProgramId') {
    //       if (ifIndex == 0) {
    //         this.queryParamsRouterUrl += element + '=' + obj[element]
    //       }
    //       else {
    //         this.queryParamsRouterUrl += '&' + element + '=' + obj[element]
    //       }
    //       ifIndex++;
    //     }
    //   } else {
    //     if (queryParamKey.includes(element) && element !== 'ProgramId') {
    //       if (elseIndex == 0) {
    //         this.queryParamsRouterUrl += element + '=' + obj[element]
    //       }
    //       else {
    //         this.queryParamsRouterUrl += '&' + element + '=' + obj[element]
    //       }
    //       elseIndex++
    //     }
    //   }

    // })
    // let addQueryParamUlr;
    // if(this.noAssess){
    // addQueryParamUlr = '/programs/public/ops-reports?ProgramId=' + this.pageParam['ProgramId'] + "&" + this.queryParamsRouterUrl;
    // }
    // else {
    // addQueryParamUlr = '/programs/operations/ops-reports?ProgramId=' + this.pageParam['ProgramId'] + "&" + this.queryParamsRouterUrl;
    // }
    // window.history.pushState({ path: addQueryParamUlr }, '', addQueryParamUlr);
    // let param;
  }

  inputChange(key, event) {
    this.applyFilter({ [key]: event.target.value });
    if (key == 'schoolId') {
      this.searchSchoolId = event.target.value;
    }
  }
  selectType(key, value) {
    this.applyFilter({ [key]: value })

  }
  generateReport(param) {
    // let param;
    // this.route.queryParams.subscribe(params => {
    //   param = params
    // });
    //console.logparam)
    this.queryParamsUrl = this.pageParam['ProgramId'] + "?";
    let paramKey = Object.keys(param);
    if (paramKey.includes('componentName')) {
      paramKey.splice(paramKey.indexOf('componentName'), 1)

    }
    // paramKey = paramKey.slice(1)
    let index = 0;
    // paramKey.forEach(element => {
    //   if (index == 0) {
    //     this.queryParamsUrl += element + '=' + param[element]
    //   }
    //   else {
    //     this.queryParamsUrl += '&' + element + '=' + param[element]
    //   }
    //   index++;
    // })

    paramKey.forEach((element, index) => {
      index ? this.queryParamsUrl += '&' + element + '=' + param[element] : this.queryParamsUrl += element + '=' + param[element]
    })
    // this.queryParamsUrl += '&csv=' + false;
    //console.logthis.queryParamsUrl)
    this.reportGenerate = true;
    console.log("generate report")
    this.reportsDataFetch();

  }
  downloadCsv(id) {
    if (id === 'school') {
      this.operationService.getSchoolReport(this.apiBaseUrl + this.reportConfig.schoolReport + this.pageParam['ProgramId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe(data => {

      },
        error => {
          this.download(error, id)

          // if (error.status == 200) {
          //   const blob = new Blob([error.error.text], { type: 'csv' });
          //   const url = window.URL.createObjectURL(blob);
          //   let a = document.createElement('a');
          //   a.href = url;
          //   a.download = `${id}-Report.csv`;
          //   document.body.appendChild(a);
          //   a.click();
          //   document.body.removeChild(a);
          //   window.URL.revokeObjectURL(url);
          // } else {
          //   this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
          // }
        });
    }
    else if (id === 'assessor') {
      this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.pageParam['ProgramId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe(data => {

      },
        error => {
          ////console.logerror.status)
          // if (error.status == 200) {
          //   const blob = new Blob([error.error.text], { type: 'csv' });
          //   const url = window.URL.createObjectURL(blob);
          //   let a = document.createElement('a');
          //   a.href = url;
          //   a.download = `${id}-Report.csv`;
          //   document.body.appendChild(a);
          //   a.click();
          //   document.body.removeChild(a);
          //   window.URL.revokeObjectURL(url);
          // } else {
          //   this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
          // }
          this.download(error, id)
        });

    }
  }

  download(object, id) {
    if (object.status == 200) {
      const blob = new Blob([object.error.text], { type: 'csv' });
      const url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = `${id}-Report.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
    }
  }

  setSearchParam(index: number = 1, size: number = this.itemsPerPage[0], label) {
    // if (label === 'school') {

    //   const url = '&page=' + index + '&limit=' + size + '&schoolName=' + this.searchSchoolValue;
    //   return url;
    // }
    // else if (label === 'assessor') {
    //   const url = '&page=' + index + '&limit=' + size + '&assessorName=' + this.searchAssessorName;
    //   return url;
    // }
    let url = '&page=' + index + '&limit=' + size;
    url = url + (label === 'school' ? '&schoolName=' + this.searchSchoolValue : '&assessorName=' + this.searchAssessorName);
    return url;

  }
  pageResponse(event) {
    // if (event.label === 'school') {
    this[`${event.label} + PageLimit`] = event.pageLimit;
    this[`${event.label} + PageIndex`] = event.pageIndex;
    this.searchParam = this.setSearchParam(this[`${event.label} + PageIndex`] + 1, this[`${event.label} + PageLimit`], event.label);
    if (event.label === 'school') {
      this.getSchoolReport();

    } else {
      this.getAssessorReport();

    }
    // }

    // else if (event.label === 'assessor') {
    //   this.assessorPageIndex = event.pageIndex;
    //   this.assessorPageLimit = event.pageLimit;
    //   this.searchParam = this.setSearchParam(this.assessorPageIndex + 1, this.assessorPageLimit, 'assessor');
    //   this.getAssessorReport();
    // }



  }
  reportsDataFetch() {
    this.utility.loaderShow();
    this.getUserSummary(this.queryParamsUrl);
    this.searchParam = this.setSearchParam(this.schoolPageIndex + 1, this.schoolPageLimit, 'school');
    this.getSchoolReport();
    this.searchParam = this.setSearchParam(this.assessorPageIndex + 1, this.assessorPageLimit, 'assessor');
    this.getAssessorReport();
  }

  filters(url) {
    if (!this.pageParam.linkId) {
      this.operationService.applyFilters(this.apiBaseUrl + this.reportConfig.reportFilter + url).subscribe(data => {
        this.filterData = this.mapQueryParams(data['result']);
        this.filterForm = this.utility.toGroup(this.filterData);
        ////console.logthis.filterForm)
        this.filterObject = this.filterForm.getRawValue()
        for (let filter in this.filterObject) {
          if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
            delete this.filterObject[filter];
          }
        }
        this.filterArray = Object.entries(this.filterObject);
        this.utility.loaderHide();
      },
        error => {
          this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
          this.utility.loaderHide();
        });
    }
  }
  mapQueryParams(data) {
    let param;
    this.route.queryParams.subscribe(params => {
      param = params;
    })
    let paramKey = Object.keys(param);
    paramKey.forEach(paramLabel => {
      data.forEach((element, index) => {
        if (element.field === paramLabel) {
          if (element.input === 'date') {
            let date = [param[paramLabel].substring(6), param[paramLabel].substring(3, 5), param[paramLabel].substring(0, 2)].join("-");
            data[index].value = date + 'T00:00:00.000Z';
          }
          else {
            data[index].value = param[paramLabel];
          }
        }
      });
    });
    return data;
  }

  getUserSummary(url) {
    this.operationService.getUserSummary(this.apiBaseUrl + this.reportConfig.reportSummary + url).subscribe(data => {
      this.summaryData = data['result'];
      const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
          obj[item[keyField]] = item
          return obj
        }, {})
      this.summaryData = arrayToObject(this.summaryData, "label")
      this.utility.loaderHide();
    },
      error => {
        this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
      }
    );
  }

  getSchoolReport(label = 'call') {
    this.schoolLoading = true;
    this.operationService.getSchoolReport(this.apiBaseUrl + this.reportConfig.schoolReport + this.queryParamsUrl + this.searchParam).subscribe(data => {
      this.share = data['result'];
      if (label == 'call') {
        this.schoolReport = this.mapGraphObject(data['result']['sections']);
      }
      else {
        this.schoolReport[0].data = data['result']['sections'][0]['data'];
        this.schoolReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search')
      }
      //  this.schoolGraph=this.schoolReport['graphData'];
      this.schoolLoading = false;

    }, error => {
      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
    }
    );
  }

  getAssessorReport(label = 'call') {
    this.assessorLoading = true;
    this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.queryParamsUrl + this.searchParam).subscribe(data => {
      if (label == 'call') {
        this.assessorReport = this.mapGraphObject(data['result']['sections']);
      }
      else {
        this.assessorReport[0].data = data['result']['sections'][0]['data'];
        this.assessorReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search')
      }
      this.assessorLoading = false;

    }, error => {
      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
    }
    );
  }
  searchSchoolIdInApi(searchId) {
  }
  
  searchVal(id, searchValue) {
    if (id == 'school') {
      this.searchSchoolValue = searchValue.target.value;
    }
    else if (id == 'assessor') {
      this.searchAssessorName = searchValue.target.value;
    }
  }

  searchInApi(label, value) {
    // if (label === 'school') {
    //   this.schoolPageIndex = 1;
    //   this.searchSchoolValue = value;
    //   this.searchParam = this.setSearchParam(this.schoolPageIndex, this.schoolPageLimit, 'school');
    //   this.getSchoolReport('search');
    // }
    // else if (label === 'assessor') {
    //   this.assessorPageIndex = 1;
    //   this.searchAssessorName = value;

    //   this.searchParam = this.setSearchParam(this.assessorPageIndex, this.assessorPageLimit, 'assessor');
    //   this.getAssessorReport('search');
    // }

    this[`${label}+PageIndex`] = 1;
    this.searchParam = this.setSearchParam(this[`${label}PageIndex`], this[`${label}PageLimit`], label);
    if (label === 'school') {
      this.searchSchoolValue = value
      this.getSchoolReport('search');
    } else {
      this.searchAssessorName = value
      this.getAssessorReport('search');
    }

  }
}
