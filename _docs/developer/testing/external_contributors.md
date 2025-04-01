---
title: External Contributors
---

To run all Submitty workflows on a forked repository, you must manually trigger the workflow. This is because GitHub Actions do not run on forked repositories by default. One of the people in the Submitty organization must manually trigger the workflow for you. To avoid this, you can trust the workflow in your forked repository. This will allow GitHub Actions to run on your forked repository without manual intervention.

---

## Steps for External Contributors

1. The first step is to visit [https://github.com/GITHUB_USERNAME/Submitty/actions](https://github.com/GITHUB_USERNAME/Submitty/actions) (or click the actions tab from your forked submitty repository) and click on the button labeled "I understand my workflows, go ahead and enable them".
   ![GitHub UI to trust workflows in fork](/images/fork_trust.png)

2. After that, on the left side of the page, click on the workflow labeled "CI" to be able to run the workflow. Then, in the "Run workflow" dropdown, select the branch you want to run the workflow on and click the green "Run workflow" button.
   ![GitHub UI to manually trigger workflow](/images/fork_dispatch.png)
3. Congratulations! You have successfully triggered the workflow on your forked repository. You should now see a new started workflow in the list of workflows.
   ![GitHub UI to view workflow run](/images/fork_workflow_run.png)

---

These steps are drawn from:

[https://github.com/github/docs/issues/15761](https://github.com/github/docs/issues/15761)

[https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow)
