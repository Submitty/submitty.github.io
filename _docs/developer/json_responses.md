---
title: JSON Responses
category: Developer
order: 5
---

We use a modified version of the [JSend](https://labs.omniti.com/labs/jsend) specification for any JSON object that is
returned by the system. This allows for a very unified feel for the application and for anything that might consume
our application.

We expect any of the following three response types:

| Type    | Description                                                                                         | Required Keys   | Optional Keys |
|---------|-----------------------------------------------------------------------------------------------------|-----------------|---------------|
| success | All went well, and (usually) some data was returned                                                 | status, data    |               |
| fail    | There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied | status, message | data          |
| error   | An error occurred in processing the request, i.e. an exception was thrown                           | status, message | data, code    |

Where we can use the returned type (contained within the `status` key in the JSON object) to determine how to process
our response.

### Example Response Types

#### Success

```json
{
  "status": "success",
  "data": null
}
```
**Required Keys**:  
_status_: Always 'success'  
_data_: An object that contains any data that the API call returns. If the call returns no data, then data will return 
null.

#### Fail

```json
{
  "status": "fail",
  "message": "Did not specify gradeable"
}
```
**Required Keys**:  
_status_: Always 'fail'  
_message_: Specify why the API call failed, which is displayed generally. 

**Optional Keys**: This can be used where each key would correspond to the GET/POST data that was sent on the request.