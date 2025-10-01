const supabase = require('../supabaseClient');

const getAllConfessions = () => {
  return supabase.from('confessions').select('*').order('created_at', { ascending: false });
};

const addConfession = (text) => {
  return supabase.from('confessions').insert([{ text }]).select();
};

const deleteConfessionById = (id) => {
  return supabase.from('confessions').delete().eq('id', id);
};

module.exports = { getAllConfessions, addConfession, deleteConfessionById };