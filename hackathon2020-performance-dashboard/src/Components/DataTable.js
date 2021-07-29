import React, { Component } from "react";

class DataTable extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data,
      highlighted: null,
    };
  }

  render() {
    const sortData = (criteria, reverseSort, event) => {
      event.persist();
      let data = this.state.data;
      if (reverseSort) {
        data.sort((a, b) => a[criteria] - b[criteria]);
      } else {
        data.sort((a, b) => b[criteria] - a[criteria]);
      }
      this.setState({ data: data, clicked: event.target.id });
    };

    return (
      <table class="data_table">
        <tbody>
            <tr>
                <th>Rank</th>
                <th onClick={(e) => sortData("brand", true, e)}>Brand</th>
                <th id="performance"
                    title="Click to sort"
                    className={this.state.clicked === "performance"? "selected": "pointer-cursor"}
                    onClick={(e) => sortData("performance", false, e)}>
                    Performance (out of 100)
                </th>
                <th id="first_meaningful_paint"
                    title="Click to sort"
                    className={this.state.clicked === "first_meaningful_paint"? "selected": "pointer-cursor"}
                    onClick={(e) => sortData("first_meaningful_paint", true, e)}>
                    First Meaningful Paint (sec)
                </th>
                <th id="best_practices_score"
                    title="Click to sort"
                    className={this.state.clicked === "best_practices_score"? "selected": "pointer-cursor"}
                    onClick={(e) => sortData("best_practices_score", true, e)}>
                    Best Practices (out of 100)
                </th>
                <th
                    id="a11y_rating"
                    title="Click to sort"
                    className={this.state.clicked === "a11y_rating"? "selected": "pointer-cursor"}
                    onClick={(e) => sortData("a11y_rating", false, e)}>
                    A11y (out of 100)
                </th>
                <th
                    id="seo_rating"
                    title="Click to sort"
                    className={this.state.clicked === "seo_rating"? "selected": "pointer-cursor"}
                    onClick={(e) => sortData("seo_rating", false, e)}>
                    SEO (out of 100)
                </th>
            </tr>
            {this.state.data.map((item, index) => (
                <tr key={index} className="data_row">
                    <td>{index + 1}</td>
                    <td>
                      {item.brand.includes(".") ?
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to open in new tab"
                        href={`https://${item.brand}`}>
                          {item.brand}
                      </a> :
                      item.brand}
                    </td>
                    <td>
                      {item.performance ?
                        Math.round(item.performance * 100) :
                        item.performance}
                    </td>
                    <td>
                      {item.first_meaningful_paint ?
                        item.first_meaningful_paint.toFixed(2) :
                        item.first_meaningful_paint}
                    </td>
                    <td>
                      {item.best_practices_score ?
                        Math.round(item.best_practices_score * 100) :
                        item.best_practices_score}
                    </td>
                    <td>
                      {item.a11y_rating ?
                        Math.round(item.a11y_rating * 100) :
                        item.a11y_rating}
                    </td>
                    <td>
                      {item.seo_rating ?
                        Math.round(item.seo_rating * 100) :
                        item.seo_rating}
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;
