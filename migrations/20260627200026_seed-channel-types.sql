truncate table channel_types restart identity cascade;

insert into channel_types (type, name, color, character_limit) values
  ('TWITTER',   'Twitter / X', '#000000', 280),
  ('LINKEDIN',  'LinkedIn',    '#2867b2', 3000),
  ('INSTAGRAM', 'Instagram',   '#E4405F', 2200),
  ('THREADS',   'Threads',     '#000000', 500),
  ('FACEBOOK',  'Facebook',    '#1877F2', 63206),
  ('BLUESKY',   'Bluesky',     '#1285fe', 300),
  ('YOUTUBE',   'YouTube',     '#FF0000', 100)
on conflict (type) do nothing;