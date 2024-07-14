# OVERVIEW

Services: 
- Seahub = frontend/web service
- Seafile = backend service

There are three config files in the community edition:

- ccnet.conf: contains the LDAP settings
- seafile.conf: contains settings for seafile daemon and fileserver.
- seahub_settings.py: contains settings for Seahub
- seafevents.conf: contains settings for search and documents preview

# LEARNINGS

- Tested: Everything under /mnt/seafile/seafile/conf is synced to running docker, so I can make edits to the configs there. 

# DATABASES

+--------------------+
| Database           |
+--------------------+
| ccnet_db           |
| information_schema |
| mysql              |
| performance_schema |
| seafile_db         |
| seahub_db          |
+--------------------+

+-------------------------------------------+
| Tables_in_seahub_db                       |
+-------------------------------------------+
| Activity                                  |
| Event                                     |
| FileAudit                                 |
| FileHistory                               |
| FileOpsStat                               |
| FileUpdate                                |
| GroupIdLDAPUuidPair                       |
| MonthlySysTraffic                         |
| MonthlyUserTraffic                        |
| PermAudit                                 |
| SysTraffic                                |
| TotalStorageStat                          |
| UserActivity                              |
| UserActivityStat                          |
| UserEvent                                 |
| UserTraffic                               |
| VirusFile                                 |
| VirusScanRecord                           |
| abuse_reports_abusereport                 |
| admin_log_adminlog                        |
| api2_token                                |
| api2_tokenv2                              |
| auth_group                                |
| auth_group_permissions                    |
| auth_permission                           |
| auth_user                                 |
| auth_user_groups                          |
| auth_user_user_permissions                |
| avatar_avatar                             |
| avatar_groupavatar                        |
| base_clientlogintoken                     |
| base_commandslastcheck                    |
| base_devicetoken                          |
| base_filecomment                          |
| base_reposecretkey                        |
| base_userlastlogin                        |
| base_usermonitoredrepos                   |
| base_userstarredfiles                     |
| captcha_captchastore                      |
| constance_config                          |
| contacts_contact                          |
| custom_share_permission                   |
| django_cas_ng_proxygrantingticket         |
| django_cas_ng_sessionticket               |
| django_content_type                       |
| django_migrations                         |
| django_session                            |
| drafts_draft                              |
| drafts_draftreviewer                      |
| external_department                       |
| file_participants_fileparticipant         |
| file_tags_filetags                        |
| institutions_institution                  |
| institutions_institutionadmin             |
| institutions_institutionquota             |
| invitations_invitation                    |
| notifications_notification                |
| notifications_usernotification            |
| ocm_share                                 |
| ocm_share_received                        |
| ocm_via_webdav_received_shares            |
| onlyoffice_onlyofficedockey               |
| options_useroptions                       |
| org_saml_config                           |
| organizations_orgadminsettings            |
| organizations_orgmemberquota              |
| organizations_orgsettings                 |
| post_office_attachment                    |
| post_office_attachment_emails             |
| post_office_email                         |
| post_office_emailtemplate                 |
| post_office_log                           |
| profile_detailedprofile                   |
| profile_profile                           |
| registration_registrationprofile          |
| related_files_relatedfiles                |
| repo_api_tokens                           |
| repo_auto_delete                          |
| repo_share_invitation                     |
| repo_tags_repotags                        |
| revision_tag_revisiontags                 |
| revision_tag_tags                         |
| role_permissions_adminrole                |
| share_anonymousshare                      |
| share_extragroupssharepermission          |
| share_extrasharepermission                |
| share_fileshare                           |
| share_orgfileshare                        |
| share_privatefiledirshare                 |
| share_uploadlinkshare                     |
| social_auth_usersocialauth                |
| sysadmin_extra_userloginlog               |
| tags_filetag                              |
| tags_fileuuidmap                          |
| tags_tags                                 |
| termsandconditions_termsandconditions     |
| termsandconditions_usertermsandconditions |
| trusted_ip_trustedip                      |
| two_factor_phonedevice                    |
| two_factor_staticdevice                   |
| two_factor_statictoken                    |
| two_factor_totpdevice                     |
| wiki_wiki                                 |
+-------------------------------------------+

+-----------------------+
| Tables_in_seafile_db  |
+-----------------------+
| Branch                |
| FileLockTimestamp     |
| FileLocks             |
| FolderGroupPerm       |
| FolderPermTimestamp   |
| FolderUserPerm        |
| GCID                  |
| GarbageRepos          |
| InnerPubRepo          |
| LastGCID              |
| OrgGroupRepo          |
| OrgInnerPubRepo       |
| OrgQuota              |
| OrgRepo               |
| OrgSharedRepo         |
| OrgUserQuota          |
| Repo                  |
| RepoFileCount         |
| RepoGroup             |
| RepoHead              |
| RepoHistoryLimit      |
| RepoInfo              |
| RepoOwner             |
| RepoSize              |
| RepoStorageId         |
| RepoSyncError         |
| RepoTokenPeerInfo     |
| RepoTrash             |
| RepoUserToken         |
| RepoValidSince        |
| RoleDownloadRateLimit |
| RoleQuota             |
| RoleUploadRateLimit   |
| SeafileConf           |
| SharedRepo            |
| SystemInfo            |
| UserDownloadRateLimit |
| UserQuota             |
| UserShareQuota        |
| UserUploadRateLimit   |
| VirtualRepo           |
| WebAP                 |
| WebUploadTempFiles    |
+-----------------------+