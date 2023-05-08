import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { hasIn, size } from 'lodash';
import { Link } from 'react-router-dom';
import noImage from '../../assets/img/noimage.jpg';

import prize_two from '../../assets/img/prize/Image 2@2x.png';
import prize_four from '../../assets/img/prize/Image 4@2x.png';
import prize_three from '../../assets/img/prize/Image 3@2x.png';
import prize_five from '../../assets/img/prize/Image 5@2x.png';
import person_logo from '../../assets/img/person.svg';
import coins from "../../assets/img/coins.svg";
import clock from "../../assets/img/clock.svg";
import '../../assets/css/winners.css';
// const Monthly = React.memo(({ scoreList,monthlyPrize }) => {
class Monthly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizeMonthly: [],
            merrgedArray: [],
            mergeScorelistWithmonthlyPrize: []
        }
    }
    componentDidMount() {   
        // const{monthlyPrize,scoreList}=this.props;
        // const{merrgedArray}=this.state;
        // monthlyPrize.map((element, index) => {

        //     let sub = {
        //       "id": "",
        //       "name": 'prize name',
        //       "points":'points',
        //       "rank": parseInt(element.rank),
        //       "prize_name": element.prize_name,
        //       "prize_image": element.prize_image,
        //       "start_date": element.start_date,
        //       "end_date": element.hisend_datetory
        //     }
        //     this.state.prizeMonthly.push(sub);
        //   })
        // console.log(scoreList)
        var SortedScoreList = this.props.scoreList.sort(function (a, b) {

            if (parseInt(a.coins) > parseInt(b.coins)) return -1;
            if (parseInt(a.coins) < parseInt(b.coins)) return 1;
            if (a.first_pred_datetime > b.first_pred_datetime) return 1;
            if (a.first_pred_datetime < b.first_pred_datetime) return -1;
            if (parseInt(a.flag) < parseInt(b.flag)) return 1;
            if (parseInt(a.flag) > parseInt(b.flag)) return -1;
        })
        console.log(this.props.monthlyPrize)
        const topScoreList = SortedScoreList.slice(0, this.props.monthlyPrize.length)
        console.log(topScoreList)
        var mergeScorelistWithmonthlyPrize;
        if (topScoreList.length === 0) {
            this.setState({mergeScorelistWithmonthlyPrize:Object.assign(topScoreList, this.props.monthlyPrize)})
            console.log("merge 1")
        }
        else {
            this.setState({mergeScorelistWithmonthlyPrize:topScoreList.map((item, i) => Object.assign({}, item, monthlyPrize[i]))})
            console.log("merge 2")
        }
        console.log(this.state.mergeScorelistWithmonthlyPrize);
    }

    static getDerivedStateFromProps(props, state) {
        var SortedScoreList = props.scoreList.sort(function (a, b) {

            if (parseInt(a.coins) > parseInt(b.coins)) return -1;
            if (parseInt(a.coins) < parseInt(b.coins)) return 1;
            if (a.first_pred_datetime > b.first_pred_datetime) return 1;
            if (a.first_pred_datetime < b.first_pred_datetime) return -1;
            if (parseInt(a.flag) < parseInt(b.flag)) return 1;
            if (parseInt(a.flag) > parseInt(b.flag)) return -1;
        })
        console.log(props.monthlyPrize);
        const topScoreList = SortedScoreList.slice(0, props.monthlyPrize.length)
        console.log(topScoreList)
        var mergeScorelistWithmonthlyPrize;
        if (topScoreList.length === 0) {
            return {mergeScorelistWithmonthlyPrize:Object.assign(topScoreList, props.monthlyPrize)}
            console.log("merge 1")
        }
        else {
            return {mergeScorelistWithmonthlyPrize:topScoreList.map((item, i) => Object.assign({}, item, props.monthlyPrize[i]))}
            console.log("merge 2")
        }
        console.log(state.mergeScorelistWithmonthlyPrize);
      }



    render() {
        const { monthlyPrize, scoreList } = this.props;
        console.log(this.props.monthlyPrize)
        //     const {prizeMonthly}=this.state;
        // console.log(this.state.prizeMonthly);
        // this.state.merrgedArray=[...this.state.prizeMonthly,...scoreList]
        // console.log(this.state.merrgedArray)

        return (

            <div class="cover-winner">
                {scoreList.length === 0 ?
                    <div>

                        {!!this.state.mergeScorelistWithmonthlyPrize && this.state.mergeScorelistWithmonthlyPrize.map((data, key) => {
                            return <div>
                                <div class="winner">
                                    <div class="cover-image">
                                        <div>
                                            <img
                                                // style={{
                                                //     borderRadius:'50%'
                                                // }}
                                                src={data.prize_image} alt="" />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div class="details-container">
                                            <h3 class="title" style={{ 'border': 'none' }}>{data.rank}. Prize - {data.prize_name}</h3>

                                            <div class="detail-column">
                                                <div class="icon"><img src={clock} alt="" class="mr-2" /></div>
                                                <span style={{
                                                    fontSize: '14px'
                                                }}>{data.start_date} - {data.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                        }
                    </div> :
                    <div>

                        {!!this.state.mergeScorelistWithmonthlyPrize && this.state.mergeScorelistWithmonthlyPrize.map((details, key) => {

                            return <>
                                {console.log(scoreList.length)}
                                <div class="winner">
                                    <div class="cover-image">
                                        <div>
                                            <img
                                                // style={{
                                                //     borderRadius:'50%'
                                                // }}
                                                src={details.prize_image} alt="" />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div class="details-container">
                                            <h3 class="title" style={{ 'border': 'none' }}>{details.rank}. {details.prize_name}</h3>
                                            <div class="detail-column">
                                                <div class="icon">
                                                    {
                                                        // !details.prize_image &&
                                                        // <img src={person_logo} alt="" class="mr-2" />
                                                    }
                                                    {
                                                        // details.prize_image &&
                                                        <img src={person_logo} alt="" class="mr-2" />
                                                    }
                                                </div>
                                                <span>{details.name == " " ?`${msisdnSubstring(details.msisdn)}XXXX` : details.name}</span>
                                             </div> 
                                            <div class="detail-column">
                                                <div class="icon"><img src={coins} alt="" class="mr-2" /></div>
                                                <span>{details.coins} Points</span>
                                            </div>
                                            <div class="detail-column" style={{ margin: "0 auto" }}>
                                                <div class="icon"><img src={clock} alt="" class="mr-2" /></div>
                                                <span style={{
                                                    fontSize: '14px'
                                                }}>{details.start_date} - {details.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                        }
                        {!!this.state.mergeScorelistWithmonthlyPrize && this.state.mergeScorelistWithmonthlyPrize.slice(scoreList.length, this.state.mergeScorelistWithmonthlyPrize.length).map((data, key) => {
                            return <div>
                                <div class="winner">
                                    <div class="cover-image">
                                        <div>
                                            <img
                                                // style={{
                                                //     borderRadius:'50%'
                                                // }}
                                                src={data.prize_image} alt="" />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div class="details-container">
                                            <h3 class="title" style={{ 'border': 'none' }}>{data.rank}. Prize - {data.prize_name}</h3>

                                            <div class="detail-column">
                                                <div class="icon"><img src={clock} alt="" class="mr-2" /></div>
                                                <span style={{
                                                    fontSize: '14px'
                                                }}>{data.start_date} - {data.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                        }
                    </div>}
            </div>
        );
    }
}
// });
export default Monthly;

const msisdnSubstring = (item) => {
    return item.substr(0, item.length-4)
}