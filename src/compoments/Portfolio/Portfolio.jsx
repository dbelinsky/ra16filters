import { Component } from 'react';
import projects from './projects';
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';

export class Portfolio extends Component {
  projects = projects;
  filters = ['All'].concat([...new Set(projects.map((item) => item.category))]);

  state = {
    selectedFilter: this.filters[0],
  };

  get filteredProjects() {
    if (this.state.selectedFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(
      (item) => item.category === this.state.selectedFilter
    );
  }

  onSelectedFilter = (e) => {
    if (e.target.textContent === this.state.selectedFilter) {
      return;
    }
    this.setState({ selectedFilter: e.target.textContent });
  };

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.onSelectedFilter}
        />

        <ProjectList projects={this.filteredProjects} />
      </>
    );
  }
}
