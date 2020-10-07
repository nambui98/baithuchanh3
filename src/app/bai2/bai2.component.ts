import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit {
  data: Product[];
  ma_san_pham: any;
  ten_san_pham: any;
  original_data: any;
  dateStart: Date;
  dateEnd: Date;
  categories: any;
  category: any;
  constructor() {
    this.categories = [
      { name: 'Học bổng, học phí', code: 1 },
      { name: 'Ba công khai', code: 2 },
      { name: 'Khoa khoa học cơ bản', code: 3 },
      { name: 'Đội ngũ cán bộ', code: 4 },
      { name: 'Phòng - Ban - Trung tâm', code: 5 },
      { name: 'Văn bằng 2', code: 6 },
    ];
  }

  ngOnInit(): void {
    this.data = [
      {
        title:
          'Danh sách sinh viên được nhận học bổng khuyến khích học tập(KKHT) và học bổng tài năng học kì 1 - năm học 2019-2020',
        category: 1,
        pushDate: '16/04/2020',
      },
      { title: 'Ba công khai', category: 2, pushDate: '09/05/2020' },
    ];
    this.data.push({ title: 'test', category: 3, pushDate: '20/11/2020' });
    this.original_data = $.extend(true, [], this.data);
  }
  public TimKiem() {
    if (this.category != null && this.category != '') {
      this.data = this.original_data.filter(
        (x) => x.category === this.category.code
      );
    } else if (this.dateStart != null && this.dateEnd != null) {
      // this.dateStart=this.dateStart.split(" ")
      console.log(new Date(2020, 10, 10));
      // console.log();

      let dateStartnew = new Date(this.dateStart);
      let dateEndnew = new Date(this.dateEnd);
      this.data = this.original_data.filter(
        (x) =>
          new Date(
            parseInt(x.pushDate.split('/')[2]),
            parseInt(x.pushDate.split('/')[1]),
            parseInt(x.pushDate.split('/')[0])
          ) >= this.dateStart &&
          new Date(
            parseInt(x.pushDate.split('/')[2]),
            parseInt(x.pushDate.split('/')[1]),
            parseInt(x.pushDate.split('/')[0])
          ) <= this.dateEnd
      );
    } else {
      this.data = $.extend(true, [], this.original_data);
    }
  }
  public getNamecategory(id) {
    return this.categories.find((item) => item.code === id).name;
  }
}
export interface Product {
  title;
  category;
  pushDate;
}
