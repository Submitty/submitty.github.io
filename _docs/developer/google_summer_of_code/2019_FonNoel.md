---
title: Fon Noel
category: Developer - Google Summer of Code 2019
---

# GSOC 2019 REPORT: Continuous Integration Testing (Automation) for Submitty
<p align="center">
<img src="https://miro.medium.com/max/700/1*gU5njSRBxB-bjkPdcNuZnA.png" height="250">
</p>
 The aim of this project is to expand the code coverage of the unit and integration tests for Submitty codebase.

### Background and Requirements

 From the beginning we observed a couple of problems and chanllenges including :
 1. Travis had become to very suitable for the complex Submitty structure. Which holds code in multiple languages
 2. The times taken to complete builds are/were quite significant for travis.
 3. Submitty code needs more and more tests, i.e we have to increase the code coverage and enforce practices to maintain its growth.
 4. We should be able to get a global view of what the system code coverage, in essence having a single coverage report for all languages.
   
 To achieve this feet, I and my project mentors [Matt Peveller]() and [Barb Cutler]() decided on the following work that had to done.

* Find tools that are suitable for Submitty's needs and can replace Travis nicely.
   
  *I found and suggested Buildbot which proved highly suitable for our complex needs*
* Migrate gradually from Travis to this tool (Buildbot).
* Work on issues on the Submitty main repository as a way to complement work being done with configuring an new continues integration framework.

*Since this work is just about architecture we also discussed extensively possibilities of completely having Submitty run on docker and not just the ubuntu VMs which take a lot of time to set up and to do tests when working with.*

### Expectations

As a result, we expected Buildbot, the highly configurable Continues Integration and Automation tool which we could maneuver to get certain not so common task done for us. This include:
 - Move some build and test operations to Buildbot and disable them from Travis at least by the end of GSoC.
 - Run all of significant parts of Travis on docker as part of the Buildbot work but also as an expirement to explore possibilities of using docker as an architecture for Submitty.
 - Reduce bugs on Submitty or introduce new features via open issues and PRs. 

# Results

## 1. Buildbot

In general, I was able to set up and have Builbot run builds on pull requests and also changes to the master branch.

The major things are achieved here are :
- Breakdown and seperation of builds, so using thesame concept of build stages distinct sections such as the `migrator`, `site`, and `autograder` where assigned independent Builbot bulders which run more concurrently.
- There's a dramatic increase in the speed of builds. In practise from between 10mins to 2 hours to less than 5 minutes for the parts that were moved.
